'use strict';
module.exports = (sequelize, DataTypes) => {
  const resto = sequelize.define('resto', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  resto.associate = function(models) {
    // associations can be defined here
  };
  return resto;
};