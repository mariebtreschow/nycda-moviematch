var assert = require('assert');
 var db = require('../models');

 describe('Post Model', () => {
   before((done) => {
     db.sequelize.sync({ force: true }).then(() => {
       done();
     });
   });

   it('creates a moviematch', (done) => {
     db.Movie.create({
       title: 'Great blog Article',
       trailer: 'trailer',
       slug: 'our test slug',
       directorName: 'kevin',
       actorNames: 'fung',
       subtitles: 'sub',
       genre: 'gen',
       lengthInMin: '12',
       description: '<h1>Awesome!</h1>'
     }).then((post) => {
       assert.equal(post.isNewRecord, false);
       assert.equal(post.title, 'Great blog Article');
       assert.equal(post.trailer, 'trailer');
       assert.equal(post.slug, 'our test slug');
       assert.equal(post.directorName, 'kevin');
       assert.equal(post.actorNames, 'fung');
       assert.equal(post.subtitles, 'sub');
       assert.equal(post.genre, 'gen');
       assert.equal(post.lengthInMin, '12');
       assert.equal(post.description, '<h1>Awesome!</h1>');
       done();
     });
   });

   it('cannot create a post if title is missing', (done) => {
     db.Movie.create({
       slug: 'our test slug',
       description: '<h1>Awesome!</h1>'
     }).catch((error) => {
       assert.equal(error.errors[0].message, 'title cannot be null');
       assert.equal(error.errors.length, 1);
       done();
     });
   });

   it('cannot create a post if content is missing', (done) => {
     db.Movie.create({
       title: 'Great blog Article',
       slug: 'our test slug'
     }).catch((error) => {
       assert.equal(error.errors[0].message, 'content cannot be null');
       assert.equal(error.errors.length, 1);
       done();
     });
   });

  //  it('generates a slug during post creation if post has no slug', (done) => {
  //    db.Movie.create({
  //      title: 'This should get sluggified',
  //      content: '<h1>Awesome!</h1>'
  //    }).then((post) => {
  //      assert.equal(post.slug, 'this-should-get-sluggified');
  //      done();
  //    });
  //  });

   it('updates a blog post', (done) => {
     db.Movie.update({
       title: 'Great blog Article',
       trailer: 'trailer',
       slug: 'our test slug',
       directorName: 'kevin',
       actorNames: 'fung',
       subtitles: 'sub',
       genre: 'gen',
       lengthInMin: '12',
       description: '<h1>Awesome!</h1>'
     }, {
       where: {
         title: 'Great blog Article'
       },
       returning: true
     }).then((updateData) => {
       var post = updateData[1][0];
       assert.equal(post.title, 'Updated new title');
       assert.equal(post.trailer, 'traer');
       assert.equal(post.slug, 'our slug');
       assert.equal(post.directorName, 'kev');
       assert.equal(post.actorNames, 'fung11');
       assert.equal(post.subtitles, 'sub222');
       assert.equal(post.genre, 'gen22');
       assert.equal(post.lengthInMin, '121');
       assert.equal(post.description, '<h1>Changed</h1>');
       done();
     });
   });

   it('deletes a blog post', (done) => {
     db.Movie.destroy({
       where: {
         title: 'Updated new title'
       }
     }).then((destroyRecordCount) => {
       assert.equal(destroyRecordCount, 1);
       done();
     });
   });
 });
