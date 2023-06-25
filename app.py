from os import path
from pathlib import Path

from flask import Flask, render_template, request


template_folder = path.abspath('./templates')

app = Flask(__name__, template_folder=template_folder)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = -1



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/<page>')
def pages(page):
    return render_template(page.lower() + '.html')

# Main Function, Runs at http://0.0.0.0:8080
if __name__ == "__main__":
    app.run(port=9090, debug=True)


@app.context_processor
def override_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                 endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)
    