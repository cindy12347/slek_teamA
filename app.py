from os import path
from pathlib import Path

from flask import Flask, render_template, request


template_folder = path.abspath('./templates')

app = Flask(__name__, template_folder=template_folder)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<page>')
def pages(page):
    return render_template(page.lower() + '.html')

# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(port=9090)