from flask import Flask, jsonify, request
import socket
from backend.tag_id import TagID
from backend.database import Database

#Start the webserver
print("\n\nStarting Web Server")
app = Flask(__name__)

tag_dictionary = TagID()

#App Config
app.config.update(
    DEBUG = True
)

@app.route('/')
def webhook():
    print(request.json)
    return '', 200

@app.route('/test')
def test():
    print('This is a test')
    return jsonify(ret='This is the return from the test')

if __name__ == '__main__':
    app.run(host='localhost', port='3000')