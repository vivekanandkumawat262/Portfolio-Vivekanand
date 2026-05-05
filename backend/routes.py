import logging

from flask import Blueprint, jsonify, request
from sqlalchemy.exc import SQLAlchemyError

from extensions import db
from models import Contact
from validators import validate_contact

logger = logging.getLogger(__name__)

contact_bp = Blueprint("contact", __name__)


# ── POST /contact ─────────────────────────────────────────────────────────────

@contact_bp.route("/contact", methods=["POST"])
def create_contact():
    """Receive, validate, and persist a contact-form submission."""

    # 1. Parse JSON body
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "Request body must be valid JSON."}), 400

    logger.info("📨  New contact submission received from IP %s", request.remote_addr)

    # 2. Validate
    errors = validate_contact(data)
    if errors:
        logger.warning("Validation failed: %s", errors)
        return jsonify({"error": errors[0] if len(errors) == 1 else errors}), 400

    # 3. Persist
    try:
        contact = Contact(
            name=data["name"].strip(),
            email=data["email"].strip().lower(),
            phone=(data.get("phone") or "").strip() or None,
            message=data["message"].strip(),
        )
        db.session.add(contact)
        db.session.commit()

        logger.info(
            "✅  Contact saved → id=%s  name=%r  email=%r",
            contact.id,
            contact.name,
            contact.email,
        )

        return jsonify({"message": "Saved successfully", "id": contact.id}), 201

    except SQLAlchemyError as exc:
        db.session.rollback()
        logger.error("Database error while saving contact: %s", exc, exc_info=True)
        return jsonify({"error": "A database error occurred. Please try again later."}), 500

    except Exception as exc:
        db.session.rollback()
        logger.error("Unexpected error: %s", exc, exc_info=True)
        return jsonify({"error": "An unexpected error occurred."}), 500


# ── GET /contacts ─────────────────────────────────────────────────────────────

@contact_bp.route("/contacts", methods=["GET"])
def get_contacts():
    """Return all contact submissions, newest first."""
    try:
        contacts = Contact.query.order_by(Contact.created_at.desc()).all()
        logger.info("📋  GET /contacts → returning %d record(s)", len(contacts))
        return jsonify({"contacts": [c.to_dict() for c in contacts], "total": len(contacts)}), 200

    except SQLAlchemyError as exc:
        logger.error("Database error while fetching contacts: %s", exc, exc_info=True)
        return jsonify({"error": "A database error occurred."}), 500


# ── Health-check ──────────────────────────────────────────────────────────────

@contact_bp.route("/health", methods=["GET"])
def health():
    """Simple liveness probe."""
    return jsonify({"status": "ok"}), 200
