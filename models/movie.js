'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coverImageURL: {
      type: DataTypes.STRING
    },
    trailer: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    directorName: {
      type: DataTypes.STRING
    },
    actorNames: {
      type: DataTypes.STRING
    },
    language: {
      type: DataTypes.STRING
    },
    subtitles: {
      type: DataTypes.STRING
    },
    genre: {
      type: DataTypes.STRING
    },
    lengthInMin: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Movie;
};
