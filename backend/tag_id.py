class TagID:

    def __init__(self):

        self.tag_dictionary = {
            "Flooding" : 1,
            "Fire " : 2
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

        return self.tag_dictionary[id]