var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var mainInventory = sequelize.define("mainInventory", {
    wine: DataTypes.STRING,
    actualInventory: DataTypes.INTEGER,
    shadowInventory: DataTypes.INTEGER,
    boxType: DataTypes.INTEGER,
    createdAt: {
      field: "createdAt",
      type: Sequelize.DATE
    },
    updatedAt: {
      field: "updatedAt",
      type: Sequelize.DATE
    }
  });
  return mainInventory;
};
