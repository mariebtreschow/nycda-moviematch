'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      coverImageURL: {
        type: Sequelize.STRING
      },
      trailer: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      directorName: {
        type: Sequelize.STRING
      },
      actorNames: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      subtitles: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      lengthInMin: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Movies');
  }
};