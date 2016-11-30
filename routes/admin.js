var express = require('express'),
    db = require('../models'),
    router = express.Router();




router.get('/', (request,response) => {
  response.render('admin/index.pug');
});

router.get('/admin/movies/new', (request,response) => {
  response.render('admin/new');
});

router.get('/admin/adminpanel', (request,response) => {
  response.render('admin/adminpanel');
});

router.get('/admin/movies', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('admin/show', { movies: movies });
  });
});

router.get('/admin/movies/edit/:id', (request,response) => {
  db.Movie.findById(request.params.id).then((movies) => {
    response.render('admin/edit', { movies: movies });
  });
});



router.post('/admin/movies/new', (request, response) => {
  if (request.body.title) {
    console.log(request.body);
    db.Movie.create(request.body).then(() => {
      response.redirect('/');
    });
  } else {
    reponse.redirect('/admin/movies');
  }
});

router.put('/admin/movies/edit/:id', (request, response) => {
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
