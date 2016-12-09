const bcrypt = require('bcrypt');

const express = require('express'),
      db = require('../models'),
      router = express.Router();

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', (req, res) => {
  db.User.create(req.body).then((user) => {
     res.redirect('/login');
  }).catch((error) => {
     res.render('register');
  });
});

router.get('/login', (req, res) => {
   res.render('login');
});

router.post('/login', (req, res) => {
   db.User.findOne({
      where: {
         email: req.body.email
      }
   }).then((userInDB) => {
      bcrypt.compare(req.body.password, userInDB.passwordDigest, (error, result) => {
         if (error || !result) {
            return res.redirect('login');
         }

         req.session.user = userInDB;
         res.redirect('/movies');
       });
    }).catch((error) => {
     res.redirect('login');
    });
});

router.get('/logout', (req, res) => {
   req.session.user = undefined;
   res.redirect('/');
});

module.exports = router;
