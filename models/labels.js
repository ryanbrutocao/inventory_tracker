var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var labels = sequelize.define("labels", {
    accountName: DataTypes.TEXT,
    wine: DataTypes.TEXT,
    promised: DataTypes.INTEGER,
    labelsLeft: DataTypes.INTEGER,
    createdAt: {
      field: "createdAt",
      type: Sequelize.DATE
    }
  });
  return labels;
};