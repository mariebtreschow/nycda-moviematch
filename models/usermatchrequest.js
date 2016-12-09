'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserMovieRequest = sequelize.define('UserMovieRequest', {
    requestId: DataTypes.INTEGER,
    targetId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserMovieRequest;
};
