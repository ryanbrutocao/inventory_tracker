var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.mainInventory.findAll({}).then(function (results) {
      console.log(results);
      // console.log("this worked");
      res.render("homePage", { results: results });

    });
  });

  //views the main page
  app.get("/maininventory", function (req, res) {
    db.mainInventory.findAll({}).then(function (results) {
      console.log(results);
      res.render("inventory", { results: results })
    });
  });

  //views the customer page
  app.get("/customerView", function (req, res) {
    db.orders.findAll({}).then(function (results) {
      console.log(results);

      res.render("customerView", { results: results })
    });
  });



  app.get("/inventory", function (req, res) {
    db.mainInventory.findOne({}).then(function (results) {
      console.log(results);
      res.render("inventory", { inventory: results });

    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.mainInventory.findOne({ where: { wine: req.params.id } }).then(function (
      dbExample
    ) {
      console.log(dbExample.dataValues);
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
