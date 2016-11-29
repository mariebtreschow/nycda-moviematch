const bcrypt = require('bcrypt');

   var express = require('express'),
            db = require('../models'),
    nodemailer = require('nodemailer'),
        router = express.Router();

var userLoggedIn = (req, res, next) => {
   if (req.session.user) {
      next();
   } else {
      res.redirect('/login');
   }
};

router.use(userLoggedIn);

router.get('/movies', (req, res) => {
//   db.Movie.findAll().then((movie) => {
      res.render('users/index');
//   });
});

//, { movie: movies }

router.get('/movies/:id', (req, res) => {
   db.Movie.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((movie) => {
      res.render('movie', { movie: movie, user: users });
   }).catch((error) => {
      console.log('This is the error:');
      console.log(error);
   });
});

router.get('/message', (req, res) => {
   res.render('users/message');
});

router.post('/message', (req, res) => {
   db.User.findOne({
      where: {
         id: req.params.id
      }
   }).then((user) => {
      transporter.sendMail({
         to: user.email,
         subject: 'MovieMatch Request',
         text: req.body.email_content + '\n\nSender Email: ' +
         req.body.email  + '\nSender User: ' + req.body.name + req.body.surname
         }, (error, info) => {
            if (error) {
            console.log('Error occured:');
            console.log(error);
         }
      });
   });
});

router.get('/profile', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('profile', { user: user});
   });
});

router.get('/profile/:id/edit', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('profile', { user: user });
   });
});

router.put('/:id', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('profile', { user: user });
   });
});



module.exports = router;
