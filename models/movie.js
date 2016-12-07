'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coverImageURL: DataTypes.STRING,
    trailer: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    directorName: DataTypes.STRING,
    actorNames: DataTypes.STRING,
    language: DataTypes.STRING,
    subtitles: DataTypes.STRING,
    genre: DataTypes.STRING,
    lengthInMin: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Movie;
};
