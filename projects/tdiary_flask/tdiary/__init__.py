#encoding:utf-8
import os
import json
from flask import Flask, request, Response
from flask import render_template, send_from_directory, url_for

app = Flask(__name__)

app.config.from_object('tdiary.settings')

app.url_map.strict_slashes = False

import tdiary.core
import tdiary.models
import tdiary.controllers
