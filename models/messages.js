'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('Messages', {
    content: DataTypes.TEXT,
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Messages;
};