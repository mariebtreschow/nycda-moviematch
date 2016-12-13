const express = require('express'),
      db = require('../models'),
      router = express.Router();


// router.get('/messages', (req, res) => {
//    res.render('users/message', { user: req.session.user });
// });


router.get('/messages', (req, res) => {
   db.UserMovieLikes.findAll({
     where: {
       UserId: req.session.user
     }
   }).then((userliked) => {
     db.UserMovieLikes.findAll({
       where: {
         MovieId: req.session.movie
       }
     }).then((Movieliked) => {
       console.log(movieliked);
     });
   });
});



module.exports = router;
