#encoding:utf-8
import os

from flask import Flask, request, Response
from flask import render_template, url_for, redirect, send_from_directory
from flask import send_file, make_response, abort

from tdiary import app

from tdiary.core import api_manager
from tdiary.models import *

# create api 
for model_name in app.config['API_MODELS']:
    model_class = app.config['API_MODELS'][model_name]
    api_manager.create_api(model_class, methods=['GET', 'POST'])

session = api_manager.session


# 将路由传递给 Angular app
@app.route('/')
def basic_pages(**kwargs):
    return make_response(open('tdiary/templates/index.html').read())


# routing for CRUD-style endpoints
# 如果请求的资源存在的话将路由传递给angular
from sqlalchemy.sql import exists

# 定义一个模型列表供本页其他代码使用
crud_url_models = app.config['CRUD_URL_MODELS']


# 如果访问指定
# @app.route('/<model_name>/')
# @app.route('/<model_name>/<item_id>')
# def rest_pages(model_name, item_id=None):
#     # 如果有定义该模型
#     if model_name in crud_url_models:
#         # 查找模型的类
#         model_class = crud_url_models[model_name]
#         # 查询
#         if item_id is None or session.query(exists().where(
#                 model_class.id == item_id)).scalar():
#             return make_response(open(
#                 'tdiary/templates/index.html').read())
#     abort(404)#模型不存在或者查不到数据如果不存在就报404


# special file handlers and error handlers
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'img/favicon.ico')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
