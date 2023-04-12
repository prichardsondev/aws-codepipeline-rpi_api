//call service -> return response
const { service } = require("./service")
const { response } = require("./handler-response");

const controller = {
  getHome: (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  },
  getHealth: async (req, res) => {
    try {
      let { error, data } = await service.getHealth();
      res.json(response(error ? 500 : 200, JSON.stringify(data)));
      console.log(data);
    } catch (error) {
      console.log("controller getHealth...", err.message);
      res.json(response(400, error));
    }
  },
  getTemp: async (req, res) => {
    try {
      let { error, data } = await service.getTemp();
      res.json(response(error ? 500 : 200, JSON.stringify(data)));
      console.log(data);
    } catch (error) {
      console.log("controller getTemp...", err.message);
      res.json(response(400, error));
    }
  },
  getImage: async (req, res) => {
    try {
      let { error, data } = await service.getImage();
      res.json(response(error ? 500 : 200, JSON.stringify(data)));
      console.log(data);
    } catch (error) {
      console.log("controller getImage...", err.message);
      res.json(response(400, error));
    }
  }
};

module.exports = {
  controller,
};