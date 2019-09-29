module.exports = function(sequelize, DataTypes) {
  var customerInfo = sequelize.define("customerInfo", {
    clientName: DataTypes.TEXT,
    primaryContact: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    email: DataTypes.TEXT,
    streetAddress: DataTypes.TEXT,
    ST: DataTypes.TEXT,
    zipcode: DataTypes.TEXT
  });
  return customerInfo;
};
