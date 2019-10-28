from flask import Flask, jsonify, request
import socket

#Start the webserver
print("\n\nStarting Web Server")
app = Flask(__name__)

#App Config
app.config.update(
    DEBUG = True
)

@app.route('/')
def webhook():
    print(request.json)
    return '', 200

if __name__ == '__main__':
    app.run(host='localhost', port='3000')