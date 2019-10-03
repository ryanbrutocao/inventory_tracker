var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var orders = sequelize.define("orders", {
    accountName: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "none"
    },
    wine: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "none"
    },
    actualOrdered: DataTypes.INTEGER,
    promised: DataTypes.INTEGER,
    boxTypeOne: DataTypes.INTEGER,
    boxTypeTwo: DataTypes.INTEGER,
    boxTypeThree: DataTypes.INTEGER,
    createdAt: {
      field: "createdAt",
      type: Sequelize.DATE
    }
  });
  return orders;
};
