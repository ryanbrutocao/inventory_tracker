var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var labels = sequelize.define("labels", {
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
    labelsLeft: {
      type: DataTypes.INTEGER,
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
  return labels;
};