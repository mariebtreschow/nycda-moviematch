var assert = require('assert');
var db = require('../models');

describe('User Model Testing', () => {
   before((done) => {
      db.sequelize.sync({ force: true }).then(() => {
         done();
      });
   });

   it('create a user', (done) => {
      db.User.create({
         name: 'Anna',
         surname: 'Kuylenstierna',
         age: 26,
         email: 'anna@kuylenstierna.com'
         }).then((user) => {
         assert.equal(user.name, 'Anna');
         assert.equal(user.surname, 'Kuylenstierna');
         assert.equal(user.age, 26);
         assert.equal(user.email, 'anna@kuylenstierna.com');
         done();
      });
   });
});
