import pymongo
from datetime import datetime, date
from PIL import Image
import imageio
from bson import Binary
import numpy
import os
from io import StringIO
from datatypes import Incident
from bson.objectid import ObjectId

# Current Tables:

# User:
#   first_name:   str
#   last_name:    str
#   address:      str
#   phone_number: str
#   dob:          str(datetime.date)
#   interests:    list of ints
#   profile_image id to image db

# Incident table:
#   creator:      user_id
#   title:        str
#   description:  str
#   date_created: str(datetime.date)
#   date_verified:str(datetime.date)
#   tag:          ints
#   location:     string
#   donation_goal integer
#   image:        link to image
#   prority:      int 1 to 3


# Donation table:
#   donator:      user_id
#   incident:     incident_id
#   amount:       integer (cence)

class Database:

    def __init__(self, address, port):

        self.myclient = pymongo.MongoClient('mongodb://' + address + ':' + port + '/')

        self.db = self.myclient['Database']

        self.user_table = self.db["Users"]
        self.donation_table = self.db["Donations"]
        self.incident_table = self.db["Incidents"]
        self.volunteers_table = self.db["Volunteers"]

        if bool('Database' in self.myclient.list_database_names()):
            print('Data already exists')
        else:
            print('Inserting Data into database')
            self.create_test_data()

        return 

    def get_user_id(self, first_name, last_name, dob):
        
        return self.user_table.find({}, {'_id': 1, 'first_name' : first_name, 'last_name' : last_name, 'dob': dob})[0].get('_id')

    def get_user(self, user_id):

        user = self.user_table.find_one({'_id': ObjectId(user_id) })

        first_name = user.get('first_name')
        last_name = user.get('last_name')
        address = user.get('address')
        phone_number = user.get('phone_number')
        dob = user.get('dob')
        interests = user.get('interests')
        profile_image = user.get('profile_image')

        return first_name, last_name, address, phone_number, dob, interests, profile_image

    def get_incident_id(self, creator, title, date_created):

        return self.incident_table.find({}, {'creator' : creator, 'title' : title, 'date_created' : date_created})[0].get('_id')

    def get_donations_id(self, donator, incident, amount):

        return self.donation_table.find({}, {'donator' : donator, 'incident' : incident, 'amount' : amount})[0].get('_id')

    def create_test_data(self):

        # User table
        self.user_table.insert_one({
            '_id'            : ObjectId('507f1f77bcf86cd799439011'),
            'first_name'     : 'Callum', 
            'last_name'      : 'Osborne', 
            'address'        : '95134', 
            'phone_number'   : '669278456', 
            'dob'            : str(date(1999, 8, 16)), 
            'interests'      : [0],
            'profile_image'  : 'callum.jpg'})

        self.user_table.insert_one({
            '_id'            : ObjectId('507f191e810c19729de860ea'),
            'first_name'     : 'Gustavo', 
            'last_name'      : 'Zapata', 
            'address'        : '95134', 
            'phone_number'   : '669278456', 
            'dob'            : str(date(1989, 8, 16)), 
            'interests'      : [8],
            'profile_image'  : 'gustavo.jpeg'})

        # Get user id
        user_id = self.get_user_id(
            'Callum', 
            'Osborne',
            str(date(1999, 8, 16)))

        self.create_incident_data(user_id)

        # Get incident id
        incident_id = self.user_table.find({}, {'creator' : user_id})[0].get('_id')

        # Donate table
        self.donation_table.insert_one({
            'donator' : user_id, 
            'incident_id' : incident_id, 
            'amount' : 100})

        # Volunteer Table
        self.volunteers_table.insert_one({
            'volunteer':    user_id,
            'incident_id':  incident_id,
            'attended':     None
        })

    def create_incident_data(self, user_id):

        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Blankets for the freezing homeless', 
                    'description'   : 'I live in San Francisco. Every morning I walk to work around 7:30 am and come back at 8 pm. With weather starting to get cold, and constant rain, I feel terrible seeing all of the homeless living on the streets, completely freezing, and with no one to help them. I am creating this initiative in order to ease the life of these homeless by buying and delivering them blankets. You can either donate money for the blankets, or help us distribute them. ', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 2, 
                    'location'      : 'San Francisco, CA', 
                    'donation_goal' : 400, 
                    'image'         : 'homeless.jpg',  
                    'volunteer_goal': 100,
                    'priority'      : 1})


        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Help teaching unprivileged children in schools', 
                    'description'   : 'As the director of North Kennedy Tract Elementary school, it is my job to be teaching the children of the future. In an area like North Kennedy Tract, educating children is their only chance to have an education, and not end up in the streets. This is why as a community, we have a vital job to make sure this happens. The North Tract Elementary School however, is lacking serious funding for basic utensils, as well as a desperate need for teacher volunteers.  ', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 5, 
                    'location'      : 'Oakland, CA', 
                    'donation_goal' : 1000, 
                    'image'         : 'education.jpg',  
                    'volunteer_goal': 100,
                    'priority'      : 2})


        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Cleaning up Alviso park', 
                    'description'   : 'Whilst on my morning run around Alviso park, I was shocked to see how much plastic was thrown away and left around. We have to understand that leaving suck quantities of plastic in the water is incredibly harmless to our environment, with many fish dying because of it. I am therefore creating an initiative to clean up Alviso park. You can either donate money for the cleaning, or volunteer and come clean it with us.  ', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 8, 
                    'location'      : 'Alviso Park, CA', 
                    'donation_goal' : 300, 
                    'image'         : 'water.jpg',  
                    'volunteer_goal': 100,
                    'priority'      : 2})


        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Soup Kitchen for the homeless', 
                    'description'   : 'Homelessness in the Bay Area is becoming and larger and larger problem, with San Jose being the 5th city in the United States with the highest population of 2. The soup kitchen is an initiative that will be offering dinner to the homeless in San Jose.', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 2, 
                    'location'      : 'San Jose, CA', 
                    'donation_goal' : 1500, 
                    'image'         : 'soupkitchen.jpg',  
                    'volunteer_goal': 100,
                    'priority'      : 2})


        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Sewa Family Case Management Services', 
                    'description'   : 'Sewa Family Case Management Service team is building a support network in the community. As a member of this network, you can help by providing your pro bono services or becoming a case volunteer, who can actually work in the field. Sewa encourages you to stay informed of our activities, asks you to become our advocate by passing on the word to motivate others and requests you to become our passionate volunteers, so that Sewa can dedicatedly provide services to the community. Donating money will help Sewa help with the following services: Severe Illness, Hospitalization & Health Care, Death & Bereavement, and Family Emergencies. ', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 10, 
                    'location'      : 'Bay Area, CA', 
                    'donation_goal' : 5000, 
                    'image'         : 'family.jpg',  
                    'volunteer_goal': 100,
                    'priority'      : 1})


        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Farm burnt by wildfires', 
                    'description'   : 'I am a farmer, and my farm has been me and my family’s life and only source of income. Things were going well for us when we had the farm, but these horrible fires in northern California have taken everything we own. Our farm has been completely burnt down, including all of our cattle and crop. Without this, there is no way I can sustain my family, especially now that my wife has had twins. I need help in order to get back on my feet, whether it is through donations, or volunteering, any help in order to grow my farm again, and be able to put food on the table for my family once again, will go a long way for us. Thank you for your help.  ', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 1, 
                    'location'      : 'Morana, CA', 
                    'donation_goal' : 15000, 
                    'image'         : 'wildfire.jpg',  
                    'volunteer_goal': 100,
                    'priority'      : 3})


        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : 'Earthquake, house destroyed, need help rebuilding', 
                    'description'   : 'In the past few weeks, there have been various earthquakes around my neighbourhood which have completely destroyed my house, to a point where it is no longer liveable. My family and me are having to live in a motel in the meantime, while we think of what to do. We want to go back home but do not have neither the manpower nor the resources to repair our house. With this incident, we are hoping that someone will help us, either by donating money, or by volunteering to help us restore our house to a liveable standard. Any help will take us a very long way, and my family and me thank you for your help.', 
                    'date_created'  : str(datetime.now), 
                    'date_verified' : None, 
                    'tag'           : 1,
                    'location'      : 'Los Banos, CA', 
                    'donation_goal' : 15000, 
                    'image'         : 'earthquake.jpg', 
                    'volunteer_goal': 100,
                    'priority'      : 3})

        return

    def get_incident_feed(self):

        incident_list = []

        for x in self.incident_table.find({'priority' : 3}):
            if x.get('date_verified') != None:
                incident_list.append(self.get_incident_data(x))

        for x in self.incident_table.find({'priority' : 2}):
            if x.get('date_verified') != None:
                incident_list.append(self.get_incident_data(x))

        for x in self.incident_table.find({'priority' : 1}):
            if x.get('date_verified') != None:
                incident_list.append(self.get_incident_data(x))

        return incident_list
    
    def get_incident_data(self, incident_record):

        id = incident_record.get('_id')
        creator = incident_record.get('creator')
        title = incident_record.get('title')
        description = incident_record.get('description')
        date_created = incident_record.get('date_created')
        date_verified = incident_record.get('date_verified')
        tag = incident_record.get('tag')
        location = incident_record.get('location')
        donation_goal = incident_record.get('donation_goal')
        volunteer_goal = incident_record.get('volunteer_goal')
        priority = incident_record.get('priority')

        current_donation = 0

        for x in self.donation_table.find({'incident_id' : id}):
            current_donation += x.get('amount')

        current_volunteer = 0

        for x in self.volunteers_table.find({'incident_id' : id}):
            volunteers += 1
              
        incident = Incident(id, creator, title, description, date_created, date_verified, tag, location, image, priority, current_donation, donation_goal, current_volunteer, volunteer_goal)

        return incident

    def add_incident(self, user_id, creator, title, description, tag, location, image, priority, donation_goal, volunteer_goal):

        self.incident_table.insert_one({
                    'creator'       : user_id, 
                    'title'         : title, 
                    'description'   : description,
                    'date_created'  : str(datetime.now), 
                    'date_verified' : str(datetime.now), 
                    'tag'           : tag, 
                    'location'      : location, 
                    'donation_goal' : donation_goal, 
                    'image'         : image,  
                    'volunteer_goal': volunteer_goal,
                    'priority'      : priority})

# download = Database('localhost', '27017')
