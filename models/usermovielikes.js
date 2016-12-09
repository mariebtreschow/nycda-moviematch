'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserMovieLikes = sequelize.define('UserMovieLikes', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserMovieLikes;
};
