class TagID:

    def __init__(self):

        self.tag_dictionary = {
            'Natural Disaster': 1,
            'Homeless':         2,
            'Animals':          3, 
            'Health':           4, 
            'Children':         5, 
            'Immigration':      6, 
            'Culture':          7, 
            'Enviroment':       8, 
            'Cleaning up':      9, 
            'Family':           10
        }

        return

    def add_tag(self, tag):

        self.tag_dictionary.update({tag : self.get_new_id() })

        return

    def get_new_id(self):

        current_id = 0

        while self.tag_dictionary[current_id] != None:
            current_id += 1

        return current_id

    def remove_tag(self, tag):

        del self.tag_dictionary[self.get_id(tag)]

        return

    def get_id(self, tag):

        return self.tag_dictionary.get(tag)

    def get_tag_name(self, id):

        for key, value in self.tag_dictionary.items(): 
            if (value == id):
                return key


        return ''