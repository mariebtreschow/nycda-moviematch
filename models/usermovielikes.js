'use strict';
module.exports = function(sequelize, DataTypes) {
  var MovieLikes = sequelize.define('MovieLikes', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MovieLikes;
};