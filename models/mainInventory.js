var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var mainInventory = sequelize.define(
    "mainInventory",
    {
      wine: DataTypes.TEXT,
      actualInventory: DataTypes.INTEGER,
      shadowInventory: DataTypes.INTEGER,
      boxType: DataTypes.INTEGER,
      createdAt: {
        field: "createdAt",
        type: Sequelize.DATE
      }
      // updatedAt: {
      //   field: "updatedAt",
      //   type: Sequelize.DATE
      // }
    },
    {
      freezeTableName: true
    }
  );
  return mainInventory;
};
