'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserMatchRequest = sequelize.define('UserMatchRequest', {
    requestId: DataTypes.INTEGER,
    targetId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserMatchRequest;
};
