from flask import Blueprint, request, jsonify
from main import db, generate_password_hash
import datetime

bp = Blueprint("register", __name__)

@bp.route("/register", methods=["POST"])
def register():
    data = request.json
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")
    
    if db.users.find_one({"email": email}):
        return jsonify({"error": "Email already exists"}), 400
    if db.users.find_one({"username": username}):
        return jsonify({"error": "Username already exists"}), 400
    user = {
        "username": username,
        "email": email,
        "password": generate_password_hash(password),
        "created_at": datetime.datetime.utcnow()
    }
    db.users.insert_one(user)
    return jsonify({"message": "User registered successfully"}), 201
