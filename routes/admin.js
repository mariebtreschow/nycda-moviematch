var express = require('express'),
    router = express.Router();




router.get('/', (request,response) => {
  response.render('admin/index.pug');
});

router.get('/admin/movies/new', (request,response) => {
  response.render('admin/new');
});

router.get('/admin/movies', (request,response) => {
  response.render('admin/show');
});


module.exports = router;























module.exports = router;
