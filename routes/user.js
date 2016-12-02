const bcrypt = require('bcrypt');

var express = require('express'),
         db = require('../models'),
 nodemailer = require('nodemailer'),
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
      res.render('users/index', {user: req.session.user });
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

router.get('/profile', (req, res) => {
   db.User.findAll().then((user) => {
      console.log(user);
      res.render('users/profile', { user: req.session.user });
   });
});

router.get('/profile/edit', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.params.id
      }
   }).then((user) => {
      res.render('users/edit', { user: req.session.user });
   });
});

router.put('/:id', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.params.id
      }
   }).then(() => {
      res.redirect('profile');
   }).catch((error) => {
      console.log('This is the error:');
      console.log(error);
   });
});

router.delete('/:id', (req, res) => {
   db.User.destroy({
      where: {
         id: req.params.id
      }
   }).then(() => {
      res.redirect('/');
   });
});

module.exports = router;
