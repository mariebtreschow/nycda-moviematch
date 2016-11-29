var express = require('express'),
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
  response.render('admin/show');
});

router.post('/admin/movies/new', (request, response) => {
  if (request.body.title) {
    MovieMatch.create(request.body).then(() => {
      response.redirect('/');
    });
  } else {
    reponse.redirect('/admin/movies');
  }
});



router.delete('/admin/:id', (request, response) => {
  MovieMatch.destroy({
    where: {
      id: request.params.id
    }
  }).then(() => {
    response.redirect('admin/show');
  });
});


router.get('/logout', (request, response) => {
  request.session.user = undefined;
  response.redirect('/');
});


module.exports = router;
