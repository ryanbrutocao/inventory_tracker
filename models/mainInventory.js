var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var mainInventory = sequelize.define(
    "mainInventory",
    {
      vintage: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      varietal: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      actualInventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "none"
      },
      shadowInventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "none"
      },
      boxType: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
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
