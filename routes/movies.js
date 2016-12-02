const express = require('express'),
      db = require('../models'),
      router = express.Router();

router.get('/', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('movies', { movies: movies });
  });
});

router.get('/:id', (request,response) => {
  db.Movie.findById(request.params.id).then((movie) => {
    response.render('movies/show', { movie: movie });
  });
});


module.exports = router;
