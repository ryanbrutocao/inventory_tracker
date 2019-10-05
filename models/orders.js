var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define(
    "orders",
    {
      accountName: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
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
      actualOrdered: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      promised: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      boxType: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      // notes: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      //   defaultValue: "none"
      // },
      createdAt: {
        field: "createdAt",
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true
    }
  );
  return orders;
};
