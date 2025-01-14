import random

# Define a list of science fiction-related topics and responses
responses = {
    "science fiction": [
        "Science fiction is a genre that explores imaginative and futuristic concepts.",
        "Some of the best science fiction books include 'Dune', 'Neuromancer', and 'The Left Hand of Darkness'.",
        "Do you enjoy reading science fiction or watching movies?"
    ],
    "robots": [
        "Robots are a common theme in science fiction, with iconic robots like R2-D2 from 'Star Wars' or HAL 9000 from '2001: A Space Odyssey'.",
        "Do you think robots will play a larger role in the future?"
    ],
    "aliens": [
        "The concept of aliens has been explored in many science fiction stories, like 'The War of the Worlds' and 'Arrival'.",
        "Do you believe in the existence of extraterrestrial life?"
    ],
    "space": [
        "Space exploration is a key theme in science fiction. 'Star Trek' and 'Interstellar' are great examples of space-based stories.",
        "Would you travel to space if given the chance?"
    ],
    "time travel": [
        "Time travel is a fascinating concept in science fiction. Popular works like 'Back to the Future' and 'The Time Machine' explore this idea.",
        "If you could time travel, would you go to the past or the future?"
    ],
    "default": [
        "That's interesting! Tell me more about what you're thinking.",
        "I'm not sure I understand. Could you elaborate?",
        "Could you share more about that?"
    ]
}

# Function to generate a response based on user input
def get_response(user_input):
    user_input = user_input.lower()
    
    for keyword in responses:
        if keyword in user_input:
            return random.choice(responses[keyword])
    
    # Default response if no keyword matches
    return random.choice(responses["default"])

# Conversation loop
def start_chat():
    print("Hello! I am a chatbot. Let's talk about science fiction!")
    while True:
        user_input = input("You: ").strip()
        if user_input.lower() in ["exit", "quit"]:
            print("Goodbye! It was nice talking to you.")
            break
        chatbot_response = get_response(user_input)
        print("Chatbot:", chatbot_response)

if __name__ == "__main__":
    start_chat()
