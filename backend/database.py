import pymongo
from datetime import datetime, date
from PIL import Image
import imageio
from bson import Binary
import numpy
import os
from io import StringIO
from gridfs import GridFS

# Current Tables:

# User:
#   first_name:   str
#   last_name:    str
#   address:      str
#   phone_number: str
#   dob:          str(datetime.date)
#   interests:    list of ints

# Incident table:
#   creator:      user_id
#   title:        str
#   description:  str
#   date_created: str(datetime.date)
#   date_verified:str(datetime.date)
#   tags:         list of ints

# Donation table:
#   donator:      user_id
#   incident:     incident_id
#   amount:       integer (cence)

class Database:

    def __init__(self, address, port):

        self.myclient = pymongo.MongoClient('mongodb://' + address + ':' + port + '/')

        self.db = self.myclient['Database']

        self.image_db = GridFS(self.myclient['Image_Database'])

        self.user_table = self.db["Users"]
        self.donation_table = self.db["Donations"]
        self.incident_table = self.db["Incidents"]

        self.create_test_data()

        image = self.image_db.get(self.user_table.find()[0].get('profile_image'))
        new_image = open('image.jpg', 'wb')
        new_image.write(image.read())
        new_image.close()
        image.close()

        return 

    def get_user_id(self, first_name, last_name, dob):
        
        return self.user_table.find({}, {'_id': 1, 'first_name' : first_name, 'last_name' : last_name, 'dob': dob})[0].get('_id')

    def get_incident_id(self, creator, title, date_created):

        return self.incident_table.find({}, {'creator' : creator, 'title' : title, 'date_created' : date_created})[0].get('_id')

    def get_donations_id(self, donator, incident, amount):

        return self.donation_table.find({}, {'donator' : donator, 'incident' : incident, 'amount' : amount})[0].get('_id')

    def get_user(self, id):

        # first_name = 
        # last_name = 
        # address = 
        # phone_number = 
        # dob = 
        # interests = 

        return 

    def get_image_key(self, dir):

        return self.image_db.put( (open(dir,'rb').read()))

    def create_test_data(self):

        # User table
        self.user_table.insert_one({
            'first_name'     : 'Callum', 
            'last_name'      : 'Osborne', 
            'address'        : '95134', 
            'phone_number'   : '669278456', 
            'dob'            : str(date(1999, 8, 16)), 
            'interests'      : [0],
            'profile_image'  : self.get_image_key('backend/image/Photo.jpg')})

        # Get user id
        user_id = self.get_user_id(
            'Callum', 
            'Osborne',
            str(date(1999, 8, 16)))

        # Incident table
        self.incident_table.insert_one({
            'creator'       : user_id, 
            'title'         : 'Fire at place', 
            'description'   : 'Fire at ...', 
            'date_created'  : str(datetime.now), 
            'date_verified' : None, 
            'tags'          : [1, 2, 3]})

        # Get incident id
        incident_id = self.user_table.find({}, {'creator' : user_id})[0].get('_id')

        # Donate table
        self.donation_table.insert_one({
            'donator' : user_id, 
            'incident_id' : incident_id, 
            'amount' : 100})

download = Database('localhost', '27017')
