from flask import Blueprint, request, jsonify
from main import db, verify_jwt

bp = Blueprint("username_available", __name__)

@bp.route("/username_available", methods=["GET"])
def username_available():
    token = request.headers.get("Authorization").split(" ")[1]
    user_id = verify_jwt(token)
    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    inbox = list(db.emails.find({"receiver": user_id}))
    for email in inbox:
        email["_id"] = str(email["_id"])
    return jsonify(inbox), 200
