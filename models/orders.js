var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define("orders", {
    accountName: DataTypes.TEXT,
    wine: DataTypes.TEXT,
    actualOrdered: DataTypes.INTEGER,
    promised: DataTypes.INTEGER,
    boxTypeOne: DataTypes.INTEGER,
    boxTypeTwo: DataTypes.INTEGER,
    boxTypeThree: DataTypes.INTEGER,
    labelsLeft: DataTypes.INTEGER,
    notes: DataTypes.TEXT,
    createdAt: {
      field: "createdAt",
      type: Sequelize.DATE
    }
  });
  return orders;
};
