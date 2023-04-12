

## Raspberry Pi Service
- project set up to work with aws cicd pipeline

## S3 Bucket
- any s3 bucket you (your credentials) have permission to write to

## DynamoDB
-- PI

### Endpoints
- /
  ```
    landing page
  ```
- /health
  ```
  {
    "uptime": 990.160930002,
    "message": "Ok",
    "timestamp": 1646572392333
  }
  ```
- /temp
  ```
  {
    "temp": "17.00",
    "uuid": "260s6sYl9KOHm1MggmpuZ3dsV5v",
    "machineID": "02"
  }
  ```
- /image
  ```
  {
    "imageUrl": "/home/pi/server/public/images/1646572466933.jpg",
    "timestamp": 1646572466933,
    "machineID": "02",
    "uuid": "260tja9Qw1O7OI2v1iL48aU7wey"
  }
  ```


### setup
- get credentials
  - IAM -> Users -> You -> Security Credentials -> HTTPS Git credentials for AWS CodeCommit
  - git config --global credential.helper 'store --file ~/.my-credentials'
  - will store credentials on Pi to keep from entering on every push
- git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/cicd-sensor-api
- Enter credentials
- cd cicd-sensor-api
- npm i

### .env file
- Create .env file in /home/pi folder for remote machine
- Create in project root for development machine (just rename example.env to env)
```
EXPRESS_PORT=8000
CLIENT=yourname
MACHINE_ID=someid
```

### Testing
- dev mode - restart server on startup
  - nodemon app.js


### Startup - when done testing
- sudo npm install -g pm2
- pm2 start app.js

### set up dataplicity to expose endpoints to the internet if you like
- dataplicity.com

