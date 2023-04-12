

## Raspberry Pi Service
- project to work with aws cicd pipeline

## Devices
- Raspberry Pi
- Pi Camera
- DHT 11/22 temp sensor

### Endpoints
- /
  ```
    landing page
  ```
- /health
  ```
  {
      uptime: 3.723388761,
      message: 'Ok',
      timestamp: 1681318787870,
      machineID: 'develop'
  }
  ```
- /temp
  ```
  { 
    temp: '29.00', 
    timestamp: 1681318996432, 
    machineID: 'develop' 
  }
  ```
- /image
  ```
  { 
      output: '/home/pi/vscode/cicd-sensor-api/api/public/images/1681318943361.jpg',
      timestamp: 1681318943361,
      machineID: 'develop'
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


### Startup - when done testing (note I use pm2 in  /scripts/application_start)
- node app.js
- or
- sudo npm install -g pm2
- pm2 start app.js

### set up dataplicity to expose endpoints to the internet if you like
- dataplicity.com

