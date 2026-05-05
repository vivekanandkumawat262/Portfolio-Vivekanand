"""
Portfolio Contact Form — Flask Backend
Entry point: `python app.py`  or  `flask run`
"""

import logging
import os
import sys

from flask import Flask, jsonify
from flask_cors import CORS

from config import get_config
from extensions import db
from routes import contact_bp


# ── Logging ───────────────────────────────────────────────────────────────────

def configure_logging(debug: bool) -> None:
    level = logging.DEBUG if debug else logging.INFO
    logging.basicConfig(
        stream=sys.stdout,
        level=level,
        format="%(asctime)s  %(levelname)-8s  %(name)s  %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S",
    )


# ── Application factory ───────────────────────────────────────────────────────

def create_app(config_override=None) -> Flask:
    app = Flask(__name__)

    # Load config
    cfg = config_override or get_config()
    app.config.from_object(cfg)

    configure_logging(app.config["DEBUG"])
    logger = logging.getLogger(__name__)

    # ✅ FIXED CORS (works for local + production)
    origins = app.config.get("CORS_ORIGINS", "*")
    if isinstance(origins, str):
        origins = origins.split(",")

    CORS(app, resources={r"/*": {"origins": origins}})

    # SQLAlchemy
    db.init_app(app)

    # Blueprints
    app.register_blueprint(contact_bp, url_prefix="/api")

    # ✅ Safe DB initialization
    with app.app_context():
        try:
            db.create_all()
            logger.info("Database tables verified / created.")
        except Exception as e:
            logger.error(f"Database initialization failed: {e}")

    # ── Global error handlers ─────────────────────────────────────────────────

    @app.errorhandler(404)
    def not_found(_):
        return jsonify({"error": "Endpoint not found."}), 404

    @app.errorhandler(405)
    def method_not_allowed(_):
        return jsonify({"error": "Method not allowed."}), 405

    @app.errorhandler(500)
    def internal_error(_):
        return jsonify({"error": "Internal server error."}), 500

    # ✅ SAFE logging (no DB URL leak)
    logger.info(
        "🚀 Flask app ready — ENV=%s",
        os.getenv("FLASK_ENV", "development"),
    )

    return app


# ── Dev entry-point ───────────────────────────────────────────────────────────

if __name__ == "__main__":
    application = create_app()
    application.run(
        host="0.0.0.0",
        port=int(os.getenv("PORT", 5000)),
        debug=application.config["DEBUG"],
    )