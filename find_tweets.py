import requests
from requests_oauthlib import OAuth1
import json

CONSUMER_API_KEY = 'wQbdzvNEOcMOe12z77Y6Miqvc'
CONSUMER_API_SECRET = 's5DEhz0Amr5Ey8pgZWNeDiwY9BF1yEcosh2S2IFeUIP4LBBtPT'
ACCESS_TOKEN = '628291152-pbJZ0i8mGVxwmWzgPsVztZXxT4S8TaRF7ghC0icK'
ACCESS_TOKEN_SECRET = '9F7DXNN0pXOSLIyWfz5EMJ4jqIwV6VAGaEpNNAkHUPgHL'

url = 'https://api.twitter.com/1.1/account/verify_credentials.json'
auth = OAuth1(CONSUMER_API_KEY, CONSUMER_API_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET)


def find_tweets():
    url = 'https://api.twitter.com/1.1/search/tweets.json?q=I&result_type=recent&lang=eng&geocode=1.355172,103.804379,10km&'
    response = requests.get(url, auth=auth)
    if response.status_code == 200:
        loaded_json = json.loads(response.content)
        print(loaded_json["statuses"])
    else:
        print("GET Error with twitter API")
        print(response.content)
        return -1


find_tweets()