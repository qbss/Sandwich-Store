'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    orderNumber: DataTypes.INTEGER(6).ZEROFILL,
    sandwichId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};