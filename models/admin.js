'use strict';
module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    slug: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Admin;
};