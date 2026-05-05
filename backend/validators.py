import re

# RFC-5322-inspired, pragmatic email regex
_EMAIL_RE = re.compile(
    r"^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
)

# E.164-ish phone: optional leading +, 7-15 digits, spaces/dashes allowed
_PHONE_RE = re.compile(r"^\+?[\d\s\-().]{7,20}$")


def validate_contact(data: dict) -> list[str]:
    """
    Validate contact-form payload.
    Returns a list of human-readable error strings (empty → valid).
    """
    errors: list[str] = []

    # ── name ──────────────────────────────────────────────────────────────────
    name = (data.get("name") or "").strip()
    if not name:
        errors.append("Name is required.")
    elif len(name) > 100:
        errors.append("Name must be 100 characters or fewer.")

    # ── email ─────────────────────────────────────────────────────────────────
    email = (data.get("email") or "").strip()
    if not email:
        errors.append("Email is required.")
    elif len(email) > 254:
        errors.append("Email address is too long.")
    elif not _EMAIL_RE.match(email):
        errors.append("Email address is not valid.")

    # ── phone (optional) ──────────────────────────────────────────────────────
    phone = (data.get("phone") or "").strip()
    if phone and not _PHONE_RE.match(phone):
        errors.append("Phone number is not valid.")

    # ── message ───────────────────────────────────────────────────────────────
    message = (data.get("message") or "").strip()
    if not message:
        errors.append("Message is required.")
    elif len(message) > 5000:
        errors.append("Message must be 5 000 characters or fewer.")

    return errors
