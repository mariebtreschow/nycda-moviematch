const express = require('express'),
      db = require('../models'),
      router = express.Router();

router.get('/', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('movies', { movies: movies });
  });
});

router.get('/:slug', (request,response) => {
  db.Movie.findById(request.params.slug).then((movie) => {
    response.render('movies/show', { movie: movie });
  });
});


module.exports = router;
