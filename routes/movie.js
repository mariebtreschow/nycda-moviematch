const express = require('express'),
      db = require('../models'),
      router = express.Router();

router.get('/movies', (req, res) => {
   db.Movie.findAll().then((movies) => {
      res.render('users/index', {
         user: req.session.user,
         movies: movies
      });
   }).catch((error) => {
      console.log('THIS IS THE ERROR:');
      console.log(error);
   });
});

router.post('/movies/:id/likes', (req, res) => {
   db.Movie.findOne({
      where: {
         id: req.params.id
      }
   }).then((movie) => {
      var like = req.body;
      like.MovieId = movie.id;
      like.UserId = req.session.user.id;

   db.UserMovieLikes.create(req.body).then(() => {
      res.redirect('/movies');

      });
   });
});


router.get('/movies/:slug', (req, res) => {
   db.Movie.findOne({
      where: {
         slug: req.params.slug
      }
   }).then((movie) => {
      db.User.findAll().then((user) => {
         res.render('users/movie', {
            user: req.session.user,
            movie: movie,
            users: user
         });
      });
   });
});

module.exports = router;
