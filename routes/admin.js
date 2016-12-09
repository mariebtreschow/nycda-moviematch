var express = require('express'),
    db = require('../models'),
    router = express.Router();




// router.get('/', (request,response) => {
//   response.render('admin/movies/index');
// });
//
// router.get('/', (request,response) => {
//   db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
//     response.render('admin/movies/index', { movies: movies });
//   });
// });

router.get('/movies/new', (request,response) => {
  response.render('admin/movies/new');
});

router.get('/users/adminpanel', (request,response) => {
  response.render('admin/users/adminpanel');
});


router.get('/movies', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('admin/movies/show', { movies: movies });
  });
});

router.get('/movies/:id/edit', (request,response) => {
  db.Movie.findById(request.params.id).then((movies) => {
    response.render('admin/movies/edit', { movies: movies });
  });
});

router.get('/users/:id/edit', (request,response) => {
  db.Users.findById(request.params.id).then((users) => {
    response.render('admin/users/edit', { users: users });
  });
});

router.put('/users/:id', (request, response) => {
  db.User.update(request.body, {
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('/admin/users/adminpanel');
  });
});


router.post('/movies/new', (request, response) => {
  if (request.body.title) {
    console.log(request.body);
    db.Movie.create(request.body).then(() => {
      response.redirect('/admin/movies/new');
    });
  } else {
    reponse.redirect('/admin/movies/index');
  }
});

router.put('/movies/:id', (request, response) => {
  db.Movie.update(request.body, {
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('/admin/movies');
  });
});

router.delete('/:id', (request, response) => {
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
