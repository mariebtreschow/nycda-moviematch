const bcrypt = require('bcrypt');

var express = require('express'),
         db = require('../models'),
    router = express.Router();

var requireUser = (req, res, next) => {
   if (req.session.user) {
      next();
   } else {
      res.redirect('/login');
   }
};

router.use(requireUser);

router.get('/movies', (req, res) => {
   db.User.findAll().then((user) => {
      res.render('users/index', { user: req.session.user });
   });
});

router.get('/movies/:id', (req, res) => {
   db.Movie.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((movie) => {
      res.render('movie', { movie: movie, user: users });
   }).catch((error) => {
      throw error;
   });
});

//router.get('/message', (req, res) => {
   //res.render('users/message');
//});

//router.post('/message', (req, res) => {
   //db.User.findOne({
      //where: {
         //id: req.params.id
      //}
   //}).then((user) => {
      //transporter.sendMail({
         //to: user.email,
         //subject: 'MovieMatch Request',
         //text: req.body.email_content + '\n\nSender Email: ' +
         //req.body.email  + '\nSender User: ' + req.body.name + req.body.surname
         //}, (error, info) => {
            //if (error) {
            //console.log('Error occured:');
            //console.log(error);
         //}
   //   });
//   });
//});

router.get('/profile/:id', (req, res) => {
   db.User.findOne({
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('users/profile', { user: req.session.user, userProfile: user });
   });
});

router.get('/profile/:id/edit', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('users/edit', { user: req.session.user, userProfile: user });
   });
});

router.put('/:id', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.params.id
      }
   }).then(() => {
      res.redirect('profile/' + req.params.id);
   }).catch((error) => {
   });
});


router.get('/edit-password', (req, res) => {
   res.render('users/edit-password', { user: req.session.user, userProfile: user });
});

router.put('/edit-password/:id', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.params.id
      }
   }).then(() => {
      res.redirect('profile');
   });
});

module.exports = router;
