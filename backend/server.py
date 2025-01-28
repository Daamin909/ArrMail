from flask import Flask
from endpoints import register, login, send_mail, retrieve

app = Flask(__name__)

# Register blueprints
app.register_blueprint(register.bp)
app.register_blueprint(login.bp)
app.register_blueprint(send_mail.bp)
app.register_blueprint(retrieve.bp)

if __name__ == "__main__":
    app.run(debug=True)
