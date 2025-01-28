from pymongo import MongoClient
import os
import datetime
import jwt
from werkzeug.security import generate_password_hash, check_password_hash

client = MongoClient("mongodb://localhost:27017/")
db = client["arrmail"]

SECRET_KEY = os.environ.get("SECRET_KEY", "your_secret_key")

def generate_jwt(user_id):
    payload = {
        "user_id": str(user_id),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")

def verify_jwt(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload["user_id"]
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None
