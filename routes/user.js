const bcrypt = require('bcrypt'),
      express = require('express'),
      db = require('../models'),
      router = express.Router();


router.get('/profile', (req, res) => {
   db.User.findOne({
     where: {
       id:req.session.user.id
     }
   }).then((user) => {
      res.render('users/profile', { user: req.session.user, userProfile: user });
   });
});

router.get('/profile/edit', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.session.user.id
      }
   }).then((user) => {
      res.render('users/edit', { user: req.session.user });
   });
});

router.put('/profile', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.session.user.id
      }
   }).then(() => {
      res.redirect('/profile');
   }).catch((error) => {
   });
});


router.get('/edit-password', (req, res) => {
   res.render('users/edit-password', { user: req.session.user });
});

router.put('/edit-password', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.session.user.id
      }
   }).then(() => {
      res.redirect('/profile');
   });
});


module.exports = router;
