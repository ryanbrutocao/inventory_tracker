var db = require("../models");

module.exports = function (app) {
  /////////////////GET ROUTES (all currently working)//////////////////////////////////////////
  // Shows all of mainInventory
  app.get("/api/maininventory", function (req, res) {
    db.mainInventory.findAll({}).then(function (results) {
      res.json(results);
    });
  });
  // Shows all of customerInfo
  app.get("/api/customerinfo", function (req, res) {
    db.customerInfo.findAll({}).then(function (results) {
      res.json(results);
    });
  });
  // Shows all orders
  app.get("/api/orders", function (req, res) {
    db.orders.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  //grabs all customers and all data
  app.get("/api/allCustomers", function (req, res) {
    db.customerInfo.findAll({}).then(function (results) {
      res.json(results);
    });
  });

  //this works to get back the information for one single client when you know the spacific name (such as from a dropdown menu)
  app.get("/api/oneCustomer", function (req, res) {
    db.customerInfo.findAll({
      where: {
        clientName: "Melissa"
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  ////////////////////////////POST ROUTES (all currently working)////////////////////////////////////////////
  // Create a new customer
  app.post("/api/newCustomer", function (req, res) {
    db.customerInfo.create(req.body).then(function (results) {
      res.json(results);
    });
  });

  // Create a new order
  app.post("/api/orders", function (req, res) {
    db.orders.create(req.body).then(function (results) {
      res.json(results);
    });
  });
  ///////////////////////////DELETE ROUTES (all currently working)//////////////////////////////////////////////////
  // Delete an order by id
  app.delete("/api/orders/:id", function (req, res) {
    db.orders.destroy({ where: { id: req.params.id } }).then(function (results) {
      res.json(results);
    });
  });
  // Delete a customer by id (not sure we need this functionality)
  app.delete("/api/customerinfo/:id", function (req, res) {
    db.customerInfo.destroy({ where: { id: req.params.id } }).then(function (results) {
      res.json(results);
    });
  });
  //////////////////////////////UPDATE ROUTES///////////////////////////////////////////////
  // Update customerInfo
  app.put("/api/customerinfo", function (req, res) {
    console.log(req);
    console.log("-----------req above----------------");
    db.customerInfo.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbUpdate) {
        res.json(dbUpdate);
      });
  });

  // Update orders
  app.put("/api/orders", function (req, res) {
    db.orders.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbUpdate) {
        res.json(dbUpdate);
      });
  });
  // Update Main Inventory
  app.put("/api/maininventory", function (req, res) {
    db.mainInventory.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbUpdate) {
        res.json(dbUpdate);
      });
  });





};
