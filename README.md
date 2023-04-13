## Raspberry Pi Service
- express api with endpoints for temp, health, image
- project setup to work with aws codepipeline

## Video Overview
[Video](https://www.youtube.com/playlist?list=PLlnL61QfD9UaiZyHimpAwI4dJpqrRVue5)

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
    -  will store credentials on Pi to keep from entering on every push
- git clone https://github.com/prichardsondev/aws-codepipeline-rpi_api.git
- Enter credentials
- cd aws-codepipeline-rpi_api
- npm i

### .env file
- Create .env file in /home/pi folder for remote machine
- Create in project root for development machine (just rename example.env to env)
```
EXPRESS_PORT=8000
CLIENT=yourname
MACHINE_ID=someid
```


### Testing on dev machine / note you could also install nodemon
### Note startup is automatic on remote machine via codedeploy script
- node app.js
- or
- sudo npm install -g pm2
- pm2 start app.js

### set up dataplicity to expose endpoints to the internet if you like
- dataplicity.com

