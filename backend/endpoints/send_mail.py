from flask import Blueprint, request, jsonify
from main import db, verify_jwt
import uuid
import datetime

bp = Blueprint("send_mail", __name__)

@bp.route("/send", methods=["POST"])
def send_mail():
    token = request.headers.get("Authorization").split(" ")[1]
    sender_id = verify_jwt(token)
    if not sender_id:
        return jsonify({"error": "Unauthorized"}), 401

    data = request.json
    receiver = data.get("receiver")
    subject = data.get("subject")
    body = data.get("body")

    if not db.users.find_one({"username": receiver}):
        return jsonify({"error": "Receiver not found"}), 404

    email = {
        "email_id": str(uuid.uuid4()),
        "sender": sender_id,
        "receiver": receiver,
        "subject": subject,
        "body": body,
        "timestamp": datetime.datetime.utcnow(),
        "read": False
    }
    db.emails.insert_one(email)
    return jsonify({"message": "Mail sent successfully"}), 200
