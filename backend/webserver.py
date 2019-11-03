from flask import Flask, jsonify, request
import socket
from tag_id import TagID
from database import Database
import json

#Start the webserver
print("\n\nStarting Web Server")
app = Flask(__name__)

tag_dictionary = TagID()
database = Database('localhost', '27017')

#App Config
app.config.update(
    DEBUG = True
)

@app.route('/')
def webhook():
    print(request.json)
    return '', 200

@app.route('/addIncident')
def addIncident():

    user_id = request.args.get('user_id')
    creator = request.args.get('creator')
    title = request.args.get('title')
    description = request.args.get('description')
    tag = request.args.get('tag')
    location = request.args.get('location')
    image = request.args.get('image')
    priority = request.args.get('priority')
    donation_goal = request.args.get('donation_goal')
    volunteer_goal = request.args.get('volunteer_goal')

    database.add_incident(user_id, creator, title, description, tag_dictionary.get_id(tag), location, image, priority, donation_goal, volunteer_goal)

    return getIncidents()

@app.route('/getUser')
def getUser():

    user_id = request.args.get('user_id')

    first_name, last_name, address, phone_number, dob, interests, profile_image = database.get_user(user_id)

    return json.dumps({
        'first_name'    : first_name, 
        'last_name'     : last_name,
        'address'       : address,
        'phone_number'  : phone_number,
        'dob'           : dob,
        'interests'     : interests,
        'profile_image' : profile_image
    })

@app.route('/getIncidents')
def getIncidents():

    json_list = []

    for x in database.get_incident_feed():
        json_list.append(x.return_json())

    print(json.dumps(str(json_list)))
 
    return json.dumps(str(json_list))

if __name__ == '__main__':
    getIncidents()
    # app.run(host='localhost', port='3000')


