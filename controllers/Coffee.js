const Coffee = require("../models/coffee");

module.exports = {
  createData: (req, res) => {
    Coffee.create({
      name: req.body.name,
      bean: req.body.bean,
      method: req.body.method,
      price: req.body.price,
    })
      .then((result) => res.json(result))
      .catch((err) => res.json(err));
  },
  getData: (req, res) => {
    Coffee.findAll()
      .then((result) => res.json(result))
      .catch((err) => {
        throw err;
      });
  },
};
