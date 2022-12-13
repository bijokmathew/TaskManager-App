from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
if os.path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_PATH")
db = SQLAlchemy(app)

from taskmanager import routes # noqa