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
      primaryContact: DataTypes.TEXT,
      phone: DataTypes.TEXT,
      email: DataTypes.TEXT,
      streetAddress: DataTypes.TEXT,
      city: {
        type: DataTypes.TEXT,
        defaultValue: "none"
      },
      ST: DataTypes.TEXT,
      zipcode: DataTypes.TEXT,
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
