import pymongo
from datetime import datetime

class Database:

    def __init__(self, address, port):

        self.myclient = pymongo.MongoClient('mongodb://' + address + ':' + port + '/')

        self.db = self.myclient['Database']

        self.user_table = self.db["Users"]
        self.donation_table = self.db["Donations"]
        self.incident_table = self.db["Incidents"]

        self.create_test_data()

        print( self.user_table.find()[0] )
        print( self.incident_table.find()[0] )
        print( self.donation_table.find()[0] )



        return

    def get_user_id(self, first_name, last_name, address, phone_number):
        
        return self.user_table.find({}, {'_id': 1, 'first_name' : first_name, 'last_name' : last_name, 'address' : address, 'phone_number' : phone_number})[0].get('_id')

    def get_incident_id(self, creater, title, description, date_created, date_verified, tags):

        return self.incident_table.find({}, {'creater' : creater, 'title' : title, 'description' : description, 'date_created' : date_created, 'date_verified' : date_verified, 'tags' : tags})[0].get('_id')

    def get_donations_id(self, user_id, incident_id, amount):

        return self.donations_table.find({}, {'user_id' : user_id, 'incident_id' : incident_id, 'amount' : amount})[0].get('_id')

    def create_test_data(self):

        self.user_table.insert_one({'first_name' : 'Callum', 'last_name' : 'Osborne', 'address' : 95134, 'phone_number' : '669278456'})

        user_id = self.get_user_id('Callum', 'Osborne', 95134, '669278456')

        self.incident_table.insert_one({'creater' : user_id, 'title' : 'Fire at place', 'description' : 'Fire at ...', 'date_created' : str(datetime.now), 'date_verified' : None, 'tags' : [1, 2, 3]})

        incident_id = self.user_table.find({}, {'creater' : user_id})[0].get('_id')

        self.donation_table.insert_one({'user_id' : user_id, 'incident_id' : incident_id, 'amount' : 100})

download = Database('localhost', '27017')
