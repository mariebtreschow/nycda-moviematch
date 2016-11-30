var express = require('express'),
    db = require('../models'),
    router = express.Router();




router.get('/', (request,response) => {
  response.render('admin/movies/index');
});

router.get('/admin/movies/new', (request,response) => {
  response.render('admin/movies/new');
});

router.get('/admin/users/adminpanel', (request,response) => {
  response.render('admin//users/adminpanel');
});

router.get('/admin/movies', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('admin/movies/show', { movies: movies });
  });
});

router.get('/admin/movies/:id/edit', (request,response) => {
  db.Movie.findById(request.params.id).then((movies) => {
    response.render('admin/movies/edit', { movies: movies });
  });
});



router.post('/admin/movies/new', (request, response) => {
  if (request.body.title) {
    console.log(request.body);
    db.Movie.create(request.body).then(() => {
      response.redirect('/');
    });
  } else {
    reponse.redirect('/admin/movies/index');
  }
});

router.put('/admin/movies/:id', (request, response) => {
  db.Movie.update(request.body, {
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('/admin/movies');
  });
});

router.delete('/admin/:id', (request, response) => {
  db.Movie.destroy({
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('/admin/movies');
  });
});


router.get('/logout', (request, response) => {
  request.session.user = undefined;
  response.redirect('/');
});


module.exports = router;
