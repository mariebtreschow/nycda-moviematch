const express = require('express'),
      db = require('../models'),
      router = express.Router();

router.get('/movies', (req, res) => {
   res.render('users/index', { user: req.session.user });
});

router.get('/movies/:slug', (req, res) => {
   db.Movie.findOne(req.body, {
      where: {
         slug: req.params.slug
      }
   }).then((movie) => {
      res.render('movie', { movie: movie, user: users });
   }).catch((error) => {
      throw error;
   });
});

module.exports = router;
