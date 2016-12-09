const bcrypt = require('bcrypt'),
      express = require('express'),
      db = require('../models'),
      router = express.Router();

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
   db.User.findOne({
     where: {
       id:req.session.user.id
     }
   }).then((user) => {
      res.render('users/profile', { user: req.session.user, userprofile: user });
   });
});

router.get('/profile/edit', (req, res) => {
   db.User.findOne({
     where: {
       id: req.params.id
     }
   }).then((user) => {
      res.render('users/edit', { user: req.session.user, userprofile: user });
   });
});



router.get('/profile/edit', (req, res) => {
   db.User.findOne(req.body, {
      where: {
         id: req.session.user.id
      }
   }).then((user) => {
      res.render('users/edit', { user: req.session.user, userProfile: user });
   });
});

router.put('/profile', (req, res) => {
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
   res.render('users/edit-password', { user: req.session.user, userprofile: user });
});

router.put('/edit-password/:id', (req, res) => {
   db.User.update(req.body, {
      where: {
         id: req.params.id
      }
   }).then(() => {
      res.redirect('/user/profile/' + req.params.id );
   });
});

module.exports = router;
