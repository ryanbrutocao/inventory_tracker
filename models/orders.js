module.exports = function(sequelize, DataTypes) {
    var orders = sequelize.define("orders", {
  
      clientName: DataTypes.TEXT,
      wine: DataTypes.TEXT,
      actualOrdered: DataTypes.INTEGER,
      promised: DataTypes.INTEGER,
      boxTypeOne: DataTypes.INTEGER,
      boxTypeTwo: DataTypes.INTEGER,
      boxTypeThree: DataTypes.INTEGER,
      labelsLeft: DataTypes.INTEGER,
      notes: DataTypes.TEXT
    });
    return orders;
  };