#!/usr/bin/env python

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__, static_folder="../frontend/dist", template_folder="../frontend/dist")
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/books")
def books():
    data = {"status": False, "message": "실패", "books": []}

    data["status"] = True
    data["message"] = "성공"
    data["books"] = [{"author": "필립 K. 딕", "title": "안드로이드는 전기양의 꿈을 꾸는가"},
                     {"author": "아서 클라크", "title": "유년기의 끝"},
                     {"author": "H.G. 웰즈", "title": "우주 전쟁"}]
    print(data)
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0")
