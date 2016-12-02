process.env.NODE_ENV = 'test';

var assert = require('assert');
var db = require('../models');

describe('User Model Testing', () => {
   before((done) => {
      db.sequelize.sync({ force: true }).then(() => {
         done();
      });
   });

   it('cannot creat a user without a password', (done) => {
      db.User.create({
         name: 'Anna',
         surname: 'Kuylenstierna',
         age: 26,
         email: 'anna@kuylenstierna.com'
      }).catch((error) => {
         assert.equal(error.errors[0].message, 'password cannot be null');
         done();
      });
   });

   //it('user can update info', (done) => {
      //ub.User.update({
      //   name: 'Marie'
   //   }, { where: {
      //   name: 'Anna'
   //   },
      //returning: true
   //}).then((updateData) => {
      //var newName = updateData[0];

      //assert.equal(user.name, 'Anna');
      //done();
   //   });
//   });

   //it('can delete a user', (done) => {
   //   db.User.destroy({
   //      where: {
   //         name: 'Anna'
   //      }
   //   }).then((destroyRecordCount) => {
   //      assert.equal(estroyRecordCount, 1);
   //      done();
   //   });
   //});
});
