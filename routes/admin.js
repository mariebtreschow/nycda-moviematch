var express = require('express'),
    router = express.Router();




router.get('/', (request,response) => {
  response.render('admin/index.pug');
});

router.get('/admin/movies/new', (request,response) => {
  console.log('testing');
  response.render('admin/new');
});



module.exports = router;























module.exports = router;
