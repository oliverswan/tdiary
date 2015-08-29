#encoding:utf-8
from datetime import datetime

from tdiary.core import db
from tdiary import app


class Note(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    price_start = db.Column(db.String(20))
    price_end = db.Column(db.String(20))
    status =  db.Column(db.Integer)

    def __init__(self, price_start, price_end,status):
        self.price_start = price_start
        self.price_end = price_end
        self.status = status
#         if pub_date is None:
#             pub_date = datetime.utcnow()
#         self.pub_date = pub_date

    def __repr__(self):
        return '<Note %r>' % self.id

# models for which we want to create API endpoints
app.config['API_MODELS'] = {'note': Note}

# models for which we want to create CRUD-style URL endpoints,
# and pass the routing onto our AngularJS application
app.config['CRUD_URL_MODELS'] = {'note': Note}
