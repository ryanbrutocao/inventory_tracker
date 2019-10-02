var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.mainInventory.findAll({}).then(function(results) {
      console.log(results);
      // console.log("this worked");
      res.render("layouts/main", {results: results});

    });
  });
  
  app.get("/newcustomer", function(req, res) {
    db.customerInfo.findOne({}).then(function(results) {
      // console.log(results);
      // console.log("this worked");
      res.render("newCustomer", {results: results});

    });
  });

  app.get("/maininventory", function(req, res) {
    db.mainInventory.findAll({}).then(function(results) {
      console.log(results);
      console.log("this worked");
  res.render("indexy", {results: results} )
    });
  });

  app.get("/pizza", function(req, res) {
    db.mainInventory.findOne({}).then(function(results) {
      console.log(results);
      console.log("this worked");
      res.render("horse", {horse: results});

    });
  });

// /shadow currently works to show each wine name, actual inventory, and shadow inventory
  app.get("/shadow", function(req, res) {
    db.mainInventory.findAll({}).then(function(results) {
      console.log(results);
      // console.log("this worked");
      res.render("shadow", {shadow: results});

    });
  });

// /shadow currently works to show each wine name, actual inventory, and shadow inventory
app.get("/customers", function(req, res) {
  db.customerInfo.findAll({}).then(function(results) {
    console.log(results);
    // console.log("this worked");
    res.render("customerlist", {customer: results});

  });
});

  app.get("/ryan/:id", function(req, res) {
    db.mainInventory.findOne({where: {wine:req.params.id}}).then(function(dbWine) {
      res.render("example", {zebra: dbWine});

    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.mainInventory.findOne({ where: { wine: req.params.id } }).then(function(
      dbExample
    ) {
      console.log(dbExample.dataValues);
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
