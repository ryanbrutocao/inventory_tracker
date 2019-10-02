var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var customerInfo = sequelize.define(
    "customerInfo",
    {
      clientName: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      primaryContact: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      phone:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      email:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      streetAddress:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      city: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      ST:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      zipcode: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "none"
      },
      createdAt: {
        field: "createdAt",
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true
    }
  );
  return customerInfo;
};
