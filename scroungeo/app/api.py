from flask import Flask, render_template, jsonify
import requests
from key import mapkey
import imghdr
app = Flask(__name__)

search_url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
photos_url = "https://maps.googleapis.com/maps/api/place/photo"

@app.route("/", methods=["GET"])
def retreive():
    return render_template('layout.html')

if __name__ ==  "__main__":
    app.run(ssl_context="adhoc")
