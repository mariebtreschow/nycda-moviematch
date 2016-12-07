process.env.NODE_ENV = 'test';

var assert = require('assert');
var db = require('../models');

describe('User Model Testing', () => {
   before((done) => {
      db.sequelize.sync({ force: true }).then(() => {
         done();
      });
   });
   // should create a user


   it('cannot creat a user without a password', (done) => {
      db.User.create({
         name: 'Anna',
         surname: 'Kuylenstierna',
         age: 26,
         email: 'anna@kuylenstierna.com'
      }).catch((error) => {
         console.log(error);
         assert.equal(error.errors[0].message, 'passwordDigest cannot be null');
         done();
      });
   });

   //it('user can update info', (done) => {
      //db.User.update({
         //name: 'Marie'
   //   }, { where: {sd
      //   name: 'Anna'
   //   },
      //returning: true
//   }).then((updateData) => {
   //   console.log(updateData);
      //var user = updateData[0];
//
   //   assert.equal(user.name, 'Anna');
      //done();
//      });
   //});

});
