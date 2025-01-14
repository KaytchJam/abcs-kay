from flask import Flask
import requests
from flask_cors import CORS
import boto3

officers = ['boueny', 'clint', 'essie', 'gary', 'isaac', 'jean-claude', 'jerry', 'kenna', 'kevin', 'mick', 'robert']

app = Flask(__name__)
CORS(app)
ec2_api = 'http://18.116.76.42:3000/groups/0/'
s3_client = boto3.client('s3')

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
      if member['lastName'] in member['firstName']:
        member['lastName'] = ""
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
  

def generate_presigned_url(bucket_name, object_key, expiration_seconds=3600):

    """ Generates a pre-signed URL for an S3 object """

    return s3_client.generate_presigned_url(
        'get_object',
        Params={'Bucket': bucket_name, 'Key': object_key},
        ExpiresIn=expiration_seconds
    )
  
@app.route("/images")
def images():
  response = {}

  for name in officers:
    response[name] = generate_presigned_url('abcs-bucket', 'officer-pictures/' + name + '.jpg')

  return response
  
if __name__ == "__main__":
    app.run(debug=True, port=9000)
