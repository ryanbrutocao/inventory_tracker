/* eslint-disable prettier/prettier */
var db = require("../models");
var sequelize = require("sequelize");

module.exports = function(app) {
  /////////////////GET ROUTES (all currently working)//////////////////////////////////////////
  // Shows all of mainInventory
  app.get("/api/maininventory", function(req, res) {
    db.mainInventory.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // Shows all of customerInfo
  app.get("/api/customerinfo", function(req, res) {
    db.customerInfo.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  // Shows all orders
  app.get("/api/orders", function(req, res) {
    db.orders.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //grabs all customers and all data
  app.get("/api/allCustomers", function(req, res) {
    db.customerInfo.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //this works to get back the information for one single wine which is chosen from a dropdown menu

  app.get("/api/oneVarietal/:varietal", function (req, res) {
    db.mainInventory.findAll({
      where: {
        varietal: req.params.varietal
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //this works to get back the information for one single wine for all customers (from orders) which is chosen from a dropdown menu

  app.get("/api/orders/:varietal", function (req, res) {
    db.orders.findAll({
      where: {
        varietal: req.params.varietal
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //this works to get back the information for one single client when you know the spacific name (such as from a dropdown menu)

  app.get("/api/oneCustomer/:accountName", function (req, res) {
    db.orders.findAll({
      where: {
        accountName: req.params.accountName
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //this works to get back the contact information for one single client when you know the spacific name (such as from a dropdown menu)
  app.get("/api/customerContact/:clientName", function (req, res) {
    db.customerInfo.findAll({
      where: {
        clientName: req.params.clientName
      }
    }).then(function (results) {
      res.json(results);
    });
  });

  //Shows labels tables
  app.get("/api/labels", function(req, res) {
    db.labels.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  //shows boxes table
  app.get("/api/boxes", function(req, res) {
    db.boxes.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  ////////////////////////////POST ROUTES (all currently working)////////////////////////////////////////////
  // Create a new customer
  app.post("/api/newCustomer", function(req, res) {
    db.customerInfo.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Create a new order (brians original code)
  app.post("/api/orders", function (req, res) {
    db.orders.create(req.body).then(function (results) {
      console.log(results);
      res.json(results);
      updateAfterOrder(results);
    });
  });


  // Create a new wine item on mainInventory
  app.post("/api/newWine", function (req, res) {
    db.mainInventory.create(req.body).then(function (results) {
      console.log(results);
      res.json(results);
    });
  });


  //Add new label types to account by wine (i.e. add a new label for a varietal and vintage for account. Do not update quantity here)
  app.post("/api/labels", function(req, res) {
    db.labels.create(req.body).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });
  ///////////////////////////DELETE ROUTES (all currently working)//////////////////////////////////////////////////
  // Delete an order by id
  app.delete("/api/orders/:id", function(req, res) {
    db.orders.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
  // Delete a customer by id (not sure we need this functionality)
  app.delete("/api/customerinfo/:id", function(req, res) {
    db.customerInfo
      .destroy({ where: { id: req.params.id } })
      .then(function(results) {
        res.json(results);
      });
  });
  //////////////////////////////UPDATE ROUTES(all currently working)///////////////////////////////////////////////
  // Update customerInfo
  app.put("/api/customerinfo", function(req, res) {
    console.log(req);
    console.log("-----------req above----------------");
    db.customerInfo
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });

  // Update orders
  app.put("/api/orders", function(req, res) {
    db.orders
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });
  // Update Main Inventory
  app.put("/api/maininventory", function(req, res) {
    db.mainInventory
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });

  //Update wine label quantity (used to add labels to an existing label count)
  app.put("/api/labels", function(req, res) {
    db.labels
      .update(
        {
          labelsLeft: sequelize.literal("labelsLeft + " + req.body.labelsLeft)
        }, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });

  //Add boxes to inventory (used to add boxes to an existing box count)
  app.put("/api/boxes", function(req, res) {
    db.boxes
      .update(
        {
          onHand: sequelize.literal("onHand + " + req.body.onHand)
        }, {
          where: {
            id: req.body.id
          }
        })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });

  /////////Update Main Inventory Wine and Boxes when an order is placed/////////////////////////////////

  function updateAfterOrder(results) {
    //if there is an actual order
    if (results.actualOrdered) {
      db.mainInventory
        .update(
          {
            //deduct actual order from actual inventory
            actualInventory: sequelize.literal(
              "actualInventory - " + results.actualOrdered
            )
          },
          {
            where: {
              vintage: results.vintage,
              varietal: results.varietal
            }
          }
        )
        .then(function(dbUpdate) {
          console.log(dbUpdate);
        });
      
      //deduct actualOrderd of boxType from boxes table
      db.boxes
        .update(
          {
            onHand: sequelize.literal("onHand - " + results.actualOrdered )
          },
          {
            where: {
              boxType: results.boxType
            }
          }
        ).then(function(dbUpdate) {
          console.log(dbUpdate);
        });
      
      //deduct from labels and promised on "labels" table
      var labelCount = results.actualOrdered * 12;
      db.labels
        .update(
          {
            promised: sequelize.literal("promised - " + results.actualOrdered),
            labelsLeft: sequelize.literal("labelsLeft - " + labelCount)
          },
          {
            where: {
              accountName: results.accountName,
              vintage: results.vintage,
              varietal: results.varietal
            }
          }
        ).then(function(dbUpdate) {
          console.log(dbUpdate);
        });
    }
    //if there was an amount promised
    if (results.promised) {
      
      //deduct promise amount from mainInventory shadowInventory amount
      db.mainInventory
        .update(
          {
            shadowInventory: sequelize.literal("shadowInventory - " + results.promised)
          },
          {
            where: {
              vintage: results.vintage,
              varietal: results.varietal
            }
          }
        ).then(function(dbUpdate) {
          console.log(dbUpdate);
        });

      //Add promised to client's vintage/varietal row in labels
      db.labels
        .update(
          {
            promised: sequelize.literal("promised + " + results.promised)
          },
          {
            where: {
              accountName: results.accountName,
              vintage: results.vintage,
              varietal: results.varietal
            }
          }  
        ).then(function(dbUpdate) {
          console.log(dbUpdate);
        });
    }
    
  }
}
