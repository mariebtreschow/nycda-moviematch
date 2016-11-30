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
   db.User.findAll().then((user) => {
      res.render('users/index', {user: user});
   });
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
      res.render('users/profile', { user: user});
   });
});

router.get('/profile/:id/edit', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('users/edit', { user: user });
   });
});

router.put('/user/:id', (req, res) => {
   console.log(req.params.id);
   db.User.update(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('user/profile', { user: user });
   }).catch((error) => {
      console.log('This is the error:');
      console.log(error);
   });
});



module.exports = router;
