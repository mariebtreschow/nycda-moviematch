const bcrypt = require('bcrypt');

'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   surname: {
      type: DataTypes.STRING,
      allowNull: false
   },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
    email: {
      type: DataTypes.STRING,
      allowNull: false
   },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      set: function(val) {
         this.setDataValue('passwordDigest', bcrypt.hashSync(val, 10));
      }
   },
    profileImageURL: DataTypes.STRING,
    passwordDigest: DataTypes.STRING,
    passwordResetToken: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
   },
   hooks: {
   beforeCreat: function(user, options) {

      }
   },
});

  return User;
};
