#encoding:utf-8
from tdiary import app

from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.restless import APIManager

# db
db = SQLAlchemy(app)

# api
api_manager = APIManager(app, flask_sqlalchemy_db=db)
