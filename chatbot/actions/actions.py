# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher 


class ActionHelloWorld(Action):

    def name(self) -> Text:
        return "action_hello_world"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        dispatcher.utter_message(text="Hello World!")

        return []


from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

products = [
    {
        "name": "Bella",
        "color": "White",
        "type": "Dog",
        "price": 70,
        "image": "https://i.pinimg.com/236x/c5/e9/58/c5e958e5e56340b8106e89b764ab9cec.jpg",
        "rating": 4.5,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Charlie",
        "color": "Grey",
        "type": "Cat",
        "price": 45,
        "image": "https://i.pinimg.com/236x/36/f9/fc/36f9fccc74fc13b921edf78fd67d3ef4.jpg",
        "rating": 4.0,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Max",
        "color": "Brown",
        "type": "Dog",
        "price": 180,
        "image": "https://i.pinimg.com/236x/bc/d1/60/bcd160098cd4746f944cccb8533cb813.jpg",
        "rating": 3.5,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Luna",
        "color": "Brown",
        "type": "Rabbit",
        "price": 50,
        "image": "https://i.pinimg.com/236x/b3/28/93/b328936a87db3ce763de560e3bc3ccb3.jpg",
        "rating": 4.8,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Rocky",
        "color": "White and black",
        "type": "Dog",
        "price": 75,
        "image": "https://i.pinimg.com/236x/fe/d1/92/fed192a4a9e6705855d8ab2a5c68db0c.jpg",
        "rating": 4.2,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Sadie",
        "color": "Red",
        "type": "Bird",
        "price": 45,
        "image": "https://i.pinimg.com/236x/a8/e6/1d/a8e61d75f2da9553855f22cfb7ecf9c4.jpg",
        "rating": 4.7,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Cooper",
        "color": "Grey",
        "type": "Rabbit",
        "price": 25,
        "image": "https://i.pinimg.com/236x/dd/48/a8/dd48a8369b07060728d9f42705eaeaf1.jpg",
        "rating": 4.0,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Coco",
        "color": "White",
        "type": "Cat",
        "price": 35,
        "image": "https://i.pinimg.com/236x/06/de/b2/06deb200eab3d83fbfb6b3ed91702289.jpg",
        "rating": 4.5,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Sunny",
        "color": "Green",
        "type": "Bird",
        "price": 30,
        "image": "https://i.pinimg.com/236x/6a/7a/6a/6a7a6a739abac5b38c01fe5309a15298.jpg",
        "rating": 3.8,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Riley",
        "color": "Grey",
        "type": "Cat",
        "price": 20,
        "image": "https://i.pinimg.com/236x/6f/4e/1d/6f4e1da7bc3c0ac59cb7c697398760ca.jpg",
        "rating": 4.0,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Buddy",
        "color": "Brown",
        "type": "Dog",
        "price": 68,
        "image": "https://i.pinimg.com/236x/21/02/4d/21024dc75a0a5c4e756cf7bb33418b85.jpg",
        "rating": 4.6,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    },
    {
        "name": "Lucky",
        "color": "White",
        "type": "Rabbit",
        "price": 30,
        "image": "https://i.pinimg.com/236x/cd/e6/19/cde619884998ddd682919d1e80b9c315.jpg",
        "rating": 4.3,
        "reviews": [{"user": "Alice", "comment": "Great product!"}]
    }
]


class ActionShowDogs(Action):
    def name(self) -> Text:
        return "action_show_dogs"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dogs = [product for product in products if product["type"] == "Dog"]
        message = "Here are the available dogs:\n"
        for dog in dogs:
            message += f"\n- <b>{dog['name']}</b>\n   Color: {dog['color']}\n   Price: ${dog['price']}\n   Rating: {dog['rating']}⭐\n"
        message += "\nAll these dogs you can find on the catalog page."
        dispatcher.utter_message(text=message)
        return []

class ActionShowCats(Action):
    def name(self) -> Text:
        return "action_show_cats"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        cats = [product for product in products if product["type"] == "Cat"]
        message = "Here are the available cats:\n"
        for cat in cats:
            message += f"\n- <b>{cat['name']}</b>\n   Color: {cat['color']}\n   Price: ${cat['price']}\n   Rating: {cat['rating']}⭐\n"
        message += "\nAll these cats you can find on the catalog page."
        dispatcher.utter_message(text=message)
        return []

class ActionShowBirds(Action):
    def name(self) -> Text:
        return "action_show_birds"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        birds = [product for product in products if product["type"] == "Bird"]
        message = "Here are the available birds:\n"
        for bird in birds:
            message += f"\n- <b>{bird['name']}</b>\n   Color: {bird['color']}\n   Price: ${bird['price']}\n   Rating: {bird['rating']}⭐\n"
        message += "\nAll these birds you can find on the catalog page."
        dispatcher.utter_message(text=message)
        return []

class ActionShowRabbits(Action):
    def name(self) -> Text:
        return "action_show_rabbits"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        rabbits = [product for product in products if product["type"] == "Rabbit"]
        message = "Here are the available rabbits:\n"
        for rabbit in rabbits:
            message += f"\n- <b>{rabbit['name']}</b>\n   Color: {rabbit['color']}\n   Price: ${rabbit['price']}\n   Rating: {rabbit['rating']}⭐\n"
        message += "\nAll these rabbits you can find on the catalog page."
        dispatcher.utter_message(text=message)
        return []

class ActionPlaceOrder(Action):
    def name(self) -> Text:
        return "action_place_order"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        message = (
            "To place an order, follow these simple steps:\n\n"
            "1. Go to the catalog page and browse through the available animals.\n"
            "2. Select the animal you want to order.\n"
            "3. Add the animal to your shopping cart.\n"
            "4. Log in to your account (if you haven't already).\n"
            "5. Visit the 'Basket' page and finalize your order.\n"
            "\nWe hope you enjoy your new pet! 🐾"
        )

        dispatcher.utter_message(text=message)
        
        return []

class ActionChangeDetails(Action):
    def name(self) -> Text:
        return "action_change_details"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

        message = (
            "To update your details, follow these steps:\n\n"
            "1. Please log in to your account.\n"
            "2. Once logged in, go to your profile page.\n"
            "3. On your profile page, you can update your personal information like name, address, etc.\n"
            "4. Make sure to save your changes after editing.\n\n"
        )

        dispatcher.utter_message(text=message)

        return []
