var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
  var labels = sequelize.define("labels", {
    accountName: DataTypes.TEXT,
    wine: DataTypes.TEXT,
    labelsLeft: DataTypes.INTEGER,
    createdAt: {
      field: "createdAt",
      type: Sequelize.DATE
    }
  });
  return labels;
};