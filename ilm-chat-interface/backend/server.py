# flask
from flask import Flask
from flask import request
from flask import abort

# load the environment variables from the .env file
from dotenv import load_dotenv
load_dotenv()

# import the token_required decorator
from xsuaa_check import auth

# Others
import os

# initialize the flask app
app = Flask(__name__)

# get the port number from the environment variable PORT
port = int(os.environ.get('PORT', 3000))

# home page
@app.route('/')
def hello():
    return "Hello World"

@app.route('/home')
@auth(scopes='import')
def home_protected(email):
    return "Hello World"

# start python server
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)