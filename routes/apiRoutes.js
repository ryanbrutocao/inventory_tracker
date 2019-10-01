var db = require("../models");
var sequelize = require('sequelize')

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

  //Show labels left table
  app.get("/api/labels", function(req, res) {
    db.labels.findAll({}).then(function(results) {
      res.json(results);
    });
  });
  ////////////////////////////POST ROUTES (all currently working)////////////////////////////////////////////
  // Create a new customer
  app.post("/api/customerInfo", function(req, res) {
    db.customerInfo.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Create a new order
  app.post("/api/orders", function(req, res) {
    db.orders.create(req.body).then(function(results) {
      console.log(results)
      res.json(results);
      updateMainInventory(results)
      deductLabels(results)
    });
  });

  //Add new label types to account by wine (i.e. add a new label for a varietal and vintage for account. Do not update quantity here)
  app.post("/api/labels", function(req, res) {
    db.labels.create(req.body).then(function(results) {
      console.log(results)
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
    db.customerInfo.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });
  //////////////////////////////UPDATE ROUTES///////////////////////////////////////////////
  // Update customerInfo
  app.put("/api/customerinfo", function(req, res) {
    db.customerInfo.update(req.body,
      {
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
    db.orders.update(req.body,
      {
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
    db.mainInventory.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });

  //Update wine label quantity
  app.put("/api/labels", function(req, res) {
    db.labels.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbUpdate) {
        res.json(dbUpdate);
      });
  });

};

/////////Update Main Inventory Wine and Boxes when an order is placed/////////////////////////////////
function updateMainInventory (results) {

  //Update actualInventory and shadowInventory of wine in mainInventory
  db.mainInventory.update({ 
    actualInventory: sequelize.literal('actualInventory - ' + results.actualOrdered),
    shadowInventory: sequelize.literal('shadowInventory - ' + results.promised)
}, {
  where: {
    item: results.wine
  }
}).then(function(dbUpdate) {
  console.log(dbUpdate);
});

//Establish box quantity and type to deduct
var boxType
var boxNum;
if (results.boxTypeOne) {
  boxType = 'box 1'
  boxNum = results.boxTypeOne
} else if (results.boxTypeTwo) {
  boxType = 'box 2'
  boxNum = results.boxTypeTwo
} else if (results.boxTypeThree) {
  boxType = 'box 3'
  boxNum = results.boxTypeThree
} else {
  boxType = null
}

// Update actual box inventory in mainInventory if boxes are used in actual order
if (boxType) {
  db.mainInventory.update({
    actualInventory: sequelize.literal('actualInventory - ' + boxNum)
  }, {
    where: {
      item: boxType
    }
  }).then(function(boxUpdate) {
    console.log(boxNum + ' was deducted from ' + boxType + ' in main inventory.')
    console.log(boxUpdate)
  });
}

};

//////////////DEDUCT LABELS AFTER AN ACTUAL ORDER ///////////////////////////////////////////////

function deductLabels (results) {
  if (results.actualOrdered) {
    db.labels.update({
      labelsLeft: sequelize.literal('labelsLeft - ' + results.actualOrdered)
    }, {
      where: {
        accountName: results.accountName,
        wine: results.wine
      }
    }).then(function(labelUpdate) {
      console.log(labelUpdate)
    })
  }
}

