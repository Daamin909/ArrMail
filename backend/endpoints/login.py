from flask import Blueprint, request, jsonify
from main import db, check_password_hash, generate_jwt

bp = Blueprint("login", __name__)

@bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    
    user = db.users.find_one({"email": email})
    if not user or not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid credentials"}), 401

    token = generate_jwt(user["_id"])
    return jsonify({"token": token}), 200
