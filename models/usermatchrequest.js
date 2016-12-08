'use strict';
module.exports = function(sequelize, DataTypes) {
  var MovieRequest = sequelize.define('MovieRequest', {
    requestId: DataTypes.INTEGER,
    targetId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MovieRequest;
};