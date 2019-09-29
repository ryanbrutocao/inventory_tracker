// var customerInfo = require("../models/customerInfo.js");
// var mainInventory = require("../models/main_inventory.js")
// var orders = require("../models/orders.js")

var db = require("../models");


module.exports = function(app) {
  // Get all examples
  app.get("/api/maininventory", function(req, res) {
    db.mainInventory.findAll({}).then(function(answer) {
      console.log(answer)
      res.json(answer);
    });
  });

  app.get("/api/customerinfo", function(req, res) {
    db.customerInfo.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/orders", function(req, res) {
    db.orders.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.main_inventory.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.main_inventory.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
