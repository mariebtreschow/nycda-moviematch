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
      type: DataTypes.INTEGER
   },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   admin: {
      type: DataTypes.BOOLEAN,
   },
    password: {
      type: DataTypes.VIRTUAL,
      set: function(val) {
         this.setDataValue('passwordDigest', bcrypt.hashSync(val, 10));
      }
   },
    profileImageURL: DataTypes.STRING,
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
         notEmpty: {
            msg: 'password cannot be null'
         }
      }
   },
    passwordResetToken: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
   },
   hooks: {
   beforeCreate: function(user, options) {

      }
   },
});

  return User;
};
