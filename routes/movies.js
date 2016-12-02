const express = require('express'),
      db = require('../models'),
      router = express.Router();

app.set('view engine', 'pug');


router.get('/movies', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('/all-movies', { movies: movies });
  });
});

router.get('/movies/:id', (request,response) => {
  db.Movie.findById(request.params.id).then((movies) => {
    response.render('/movie-layout', { movies: movies });
  });
});


module.exports = router;
