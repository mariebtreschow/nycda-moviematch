const express = require('express'),
      _ = require('lodash'),
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






//UserMovieLikes



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


router.post('/match/:id', (req, res) => {
   db.User.findOne({
      where: {
         id: req.params.id
      }
   }).then((matchUser) => {
      var user = req.session.user;
      var match = req.body;
      match.targetId = matchUser.id;
      match.requestId = req.session.user.id;

      console.log(req.body);
      console.log(user);

      db.UserMatchRequest.create(req.body).then(() => {
         res.redirect('/movies');

      });
   });
});





router.get('/movies/:slug', (req, res) => {
   var movie;
   db.Movie.findOne({
      where: {
         slug: req.params.slug
      }
   }).then((foundMovie) => {
      movie = foundMovie;

      return db.UserMovieLikes.findAll({
         where: {
            MovieId: foundMovie.id
         }
      });
   }).then((movieLikes) => {
      var userIds = movieLikes.map((movieLike) => {
         return movieLike.UserId;
      });

      console.log(userIds);

      return db.User.findAll({
         where: {
            id: {
               $in: userIds
            }
         }
      });
   }).then((users) => {
      res.render('users/movie', {
         user: req.session.user,
         movie: movie,
         users: users
      });
   }).catch((error) => {
      console.log(error);
      // handle the error here
   });
});

module.exports = router;
