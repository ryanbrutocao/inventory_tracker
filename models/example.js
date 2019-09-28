module.exports = function(sequelize, DataTypes) {
  var main_inventory = sequelize.define("main_inventory", {

    customer_name: DataTypes.TEXT,
    varietal: DataTypes.STRING,
    actual_ordered: DataTypes.INTEGER,
    promised: DataTypes.INTEGER,
    box_1_actual: DataTypes.INTEGER,
    box_2_actual: DataTypes.INTEGER,
    box_3_actual: DataTypes.INTEGER,
    box_1_promised: DataTypes.INTEGER,
    box_2_promised: DataTypes.INTEGER,
    box_3_promised: DataTypes.INTEGER,
    label_count: DataTypes.INTEGER,
    date_ordered: DataTypes.DATE,
    notes: DataTypes.TEXT
  });
  return main_inventory;
};
