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
