from flask import Flask
import requests

app = Flask(__name__)

ec2_api = 'http://18.116.76.42:3000/groups/0/'

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/members")
def members():
  response = requests.get(ec2_api)
  if response.status_code == 200:
    json = response.json()
    members = json['members']
    list_members = []
    for eid in members:
      member = members[eid]
      dict = {
        "name": member['firstName'] + " " + member['lastName'],
        "email": member['email'],
        "birthday": member['birthday'],
        "totalPoints": member['totalPoints'],
        "graduationYear": member['graduationYear']
      }
      list_members.append(dict)

    print(len(list_members))

    return {"numMembers" : len(list_members),
            "members": list_members}
  else:
    return {"error": "Failed to fetch members"}
  
if __name__ == "__main__":
    app.run(debug=True, port=9000)
