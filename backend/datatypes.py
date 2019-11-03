import json

class Incident:

    def __init__(self, id, creator, title, description, date_created, date_verified, tag, location, image, priority, current_donation, donation_goal, current_volunteer, volunteer_goal):
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
        return

    def return_json(self):

        return {
            'id' :              self.id, 
            'creator' :         self.creator,
            'title' :           self.title, 
            'description':      self.description, 
            'date_created':     self.date_created,
            'date_verified':    self.date_verified,
            'tag':              self.tag,
            'location':         self.location,
            'image':            self.image,
            'priority':         self.priority,
            'current_donation': self.current_donation,
            'donation_goal':    self.donation_goal,
            'volunteer_goal':   self.volunteer_goal,
            'current_volunteer':self.current_volunteer    
        }

    

