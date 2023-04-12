//preform logic -> return response to controller
require('dotenv').config();

const sensor = require("node-dht-sensor").promises;
const libcamera = require('node-libcamera')

const service = {

    getHealth: async () => {
        try {
            let data = {
                uptime: process.uptime(),
                message: 'Ok',
                timestamp: Date.now(),
                machineID: process.env.MACHINE_ID || 'set up /.env' 
            }
            return {data};

        } catch (error) {
            console.log('service.js getHealth', error);
            return error;
        }
    },
    getTemp: async () => {
        try {
            const res = await sensor.read(11, 4);

            let data = {
                temp: res.temperature.toFixed(2),
                timestamp: Date.now(),
                machineID: process.env.MACHINE_ID || 'set up /.env'
            };
            return {data};

        } catch (error) {
            console.log('service.js getTemp', error);
            return error;
        }
    },
    getImage: async () => {

        try {
            const timestamp = Date.now();
            let output = `${__dirname}/public/images/${timestamp}.jpg`;

            const config = {
                output, // output file path
                timeout: 500, // timeout before taking the picture
                width: 640, // image width
                height: 480, // image height
                nopreview: true,
            };

            await libcamera.still(config);

            let data = {
                output: config.output,
                timestamp,
                machineID: process.env.MACHINE_ID || 'set up /.env'
            }
            return {data};

        } catch (error) {
            console.log('service.js getImage', error);
            return error;
        }

    }
};

module.exports = {
    service,
};