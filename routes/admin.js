var express = require('express'),
    db = require('../models'),
    router = express.Router();

var requireAdmin = (req, res, next) => {
  // if (req.path === '/') {
  //   return next();
  // }

  if (req.session.user.admin) {
    next();
  } else {
    res.redirect('/');
  }
};

router.use(requireAdmin);


// router.get('/', (req,res) => {
//   res.render('admin/movies/index');
// });
//
router.get('/', (req,res) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    res.render('admin/movies/index', { admin: req.session.user, movies: movies });
  });
});

router.get('/movies/new', (req, res) => {
  res.render('admin/movies/new', { admin: req.session.user });
});

router.get('/users/adminpanel', (req,res) => {
  db.User.findAll({ order: 'id ASC' }).then((users) => {
    res.render('admin/users/adminpanel', { admin: req.session.user, users: users });
  });
});


router.get('/movies', (req,res) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    res.render('admin/movies/show', { admin: req.session.user, movies: movies });
  });
});



router.get('/movies/:id/edit', (req,res) => {
  db.Movie.findById(req.params.id).then((movies) => {
    res.render('admin/movies/edit', { admin: req.session.user, movies: movies });
  });
});

// router.get('/users/:id/edit', (req,res) => {
//   db.User.findById(req.params.id).then((users) => {
//     res.render('admin/users/edit', { admin: req.session.user, userProfile: users });
//   });
// });

router.put('/users/:id', (req, res) => {
  db.User.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/admin/users/adminpanel');
  });
});





router.post('/movies/new', (req, res) => {
  if (req.body.title) {
    console.log(req.body);
    db.Movie.create(req.body).then(() => {
      res.redirect('/admin/movies/new');
    });
  } else {
    reponse.redirect('/admin/movies/index');
  }
});

router.get('/movies/:slug', (req, res) => {
   var movie;
   db.Movie.findOne({
      where: {
         slug: req.params.slug
      }
   }).then((foundMovie) => {
      movie = foundMovie;

      return db.UserMovieLikes.findAll({
         where: {
            MovieId: foundMovie.id
         }
      });
   }).then((movieLikes) => {
      var userIds = movieLikes.map((movieLike) => {
         return movieLike.UserId;
      });
      return db.User.findAll({
         where: {
            id: {
               $in: userIds
            }
         }
      });
   }).then((users) => {
      res.render('admin/movies/movie', {
         admin: req.session.user,
         movie: movie,
         users: users
      });
   }).catch((error) => {
      console.log(error);

   });
});


router.put('/movies/:id', (req, res) => {
  db.Movie.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/admin/movies');
  });
});

router.delete('/users/:id', (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.redirect('/admin/movies');
  });
});


router.get('/logout', (req, res) => {
   req.session.user = undefined;
   res.redirect('/');
});



module.exports = router;
