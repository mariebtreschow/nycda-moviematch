'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      validate: {
         notEmpty: {
             msg: 'Name cannot be empty'
         }
      }
   },
    surname: {
      type: DataTypes.STRING,
      validate: {
         notEmpty: {
             msg: 'Surame cannot be empty'
         }
      }
   },
    slug: {
      type: DataTypes.STRING,
      validate: {
         notEmpty: {
            msg: 'Slug cannot be empty'
         }
      }
   },
    age: {
      type: DataTypes.INTEGER,
      validate: {
         notEmpty: {
             msg: 'Age cannot be empty'
         }
      }
   },
    email: {
      type: DataTypes.STRING,
      validate: {
         notEmpty: {
             msg: 'Email cannot be empty'
         }
      }
   },
    password: {
      type: DataTypes.STRING,
      validate: {
         notEmpty: {
             msg: 'Password cannot be empty'
         }
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
    }
  });
  return User;
};
