process.env.NODE_ENV = 'test';


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
       coverImageURL: 'img',
       trailer: 'trailer',
       slug: 'our test slug',
       directorName: 'kevin',
       actorNames: 'fung',
       language: 'dutch',
       subtitles: 'sub',
       genre: 'gen',
       lengthInMin: '12',
       description: '<h1>Awesome!</h1>'
     }).then((post) => {
       assert.equal(post.isNewRecord, false);
       assert.equal(post.title, 'Great blog Article');
       assert.equal(post.coverImageURL, 'img');
       assert.equal(post.trailer, 'trailer');
       assert.equal(post.slug, 'our test slug');
       assert.equal(post.directorName, 'kevin');
       assert.equal(post.actorNames, 'fung');
       assert.equal(post.language, 'dutch');
       assert.equal(post.subtitles, 'sub');
       assert.equal(post.genre, 'gen');
       assert.equal(post.lengthInMin, '12');
       assert.equal(post.description, '<h1>Awesome!</h1>');
       done();
     });
   });

   it('cannot create a post if title is missing', (done) => {
     db.Movie.create({
       coverImageURL: 'img',
       trailer: 'trailer',
       slug: 'our test slug',
       directorName: 'kevin',
       actorNames: 'fung',
       language: 'dutch',
       subtitles: 'sub',
       genre: 'gen',
       lengthInMin: '12',
       description: '<h1>Awesome!</h1>'
     }).catch((error) => {
       assert.equal(error.errors[0].message, 'title cannot be null');
       assert.equal(error.errors.length, 1);
       done();
     });
   });

   it('cannot create a post if description is missing', (done) => {
     db.Movie.create({
       title: 'Great blog Article',
       coverImageURL: 'img',
       trailer: 'trailer',
       slug: 'our test slug',
       directorName: 'kevin',
       actorNames: 'fung',
       language: 'dutch',
       subtitles: 'sub',
       genre: 'gen',
       lengthInMin: '12',
     }).catch((error) => {
       assert.equal(error.errors[0].message, 'description cannot be null');
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

   it('updates a moviematch', (done) => {
     db.Movie.update({
       title: 'Great blog Article1',
       coverImageURL: 'img1',
       trailer: 'trailer1',
       slug: 'our test slug1',
       directorName: 'kevin1',
       actorNames: 'fung1',
       language: 'dutch1',
       subtitles: 'sub1',
       genre: 'gen1',
       lengthInMin: '121',
       description: '<h1>Awesome!1</h1>'
     }, {
       where: {
         title: 'Great blog Article'
       },
       returning: true
     }).then((updateData) => {
       var post = updateData[1][0];
       assert.equal(post.isNewRecord, false);
       assert.equal(post.title, 'Great blog Article1');
       assert.equal(post.coverImageURL, 'img1');
       assert.equal(post.trailer, 'trailer1');
       assert.equal(post.slug, 'our test slug1');
       assert.equal(post.directorName, 'kevin1');
       assert.equal(post.actorNames, 'fung1');
       assert.equal(post.language, 'dutch1');
       assert.equal(post.subtitles, 'sub1');
       assert.equal(post.genre, 'gen1');
       assert.equal(post.lengthInMin, '121');
       assert.equal(post.description, '<h1>Awesome!1</h1>');
       done();
     });
   });

   it('deletes a blog post', (done) => {
     db.Movie.destroy({
       where: {
         title: 'Great blog Article1'
       }
     }).then((destroyRecordCount) => {
       assert.equal(destroyRecordCount, 1);
       done();
     });
   });
 });
