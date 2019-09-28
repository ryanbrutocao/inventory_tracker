module.exports = function(sequelize, DataTypes) {
  var main_inventory = sequelize.define("main_inventory", {

    wine: DataTypes.TEXT,
    actual: DataTypes.INTEGER,
    actualInventory: DataTypes.INTEGER,
    shadowInventory: DataTypes.INTEGER,
    boxType: DataTypes.INTEGER
  });
  return main_inventory;
};
