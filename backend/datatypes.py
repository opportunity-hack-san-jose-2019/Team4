import json
from tag_id import TagID

class Incident:

    def __init__(self, id, creator, title, description, date_created, date_verified, tag, location, image, priority, current_donation, donation_goal, current_volunteer, volunteer_goal, creater_image, creater):
        self.id = id
        self.creator = creator
        self.title = title
        self.description = description
        self.date_created = date_created
        self.date_verified = date_verified
        self.tag = tag
        self.location = location
        self.image = image
        self.priority = priority
        self.current_donation = current_donation
        self.donation_goal = donation_goal
        self.volunteer_goal = volunteer_goal
        self.current_volunteer = current_volunteer
        self.creater_image = creater_image
        self.creater = creater
        
        return

    def return_json(self):

        tag_dictionary = TagID()

        return {
            'id' :              self.id, 
            'creator' :         self.creator,
            'title' :           self.title, 
            'description':      self.description, 
            'date_created':     self.date_created,
            'date_verified':    self.date_verified,
            'tag':              tag_dictionary.get_tag_name(self.tag),
            'location':         self.location,
            'image':            self.image,
            'priority':         self.get_priority(self.priority),
            'current_donation': self.current_donation,
            'donation_goal':    self.donation_goal,
            'volunteer_goal':   self.volunteer_goal,
            'current_volunteer':self.current_volunteer,
            'creater_image':    self.creater_image,
            'creater':          self.creater    
        }

    def get_priority(self, i):

        if i == 1:
            return 'low.png'
        elif i == 2:
            return 'medium.png'
        else:
            return 'high.png'

    

