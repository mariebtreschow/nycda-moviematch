const bcrypt = require('bcrypt');

var express = require('express'),
         db = require('../models'),
     router = express.Router();

router.get('/', (req, res) => {
   res.render('login');
});

router.post('/', (req, res) => {
   db.User.findOne({
      where: {
         email: req.body.email
         }
      }).then((userInDB) => {
         bcrypt.compare(req.body.password, userInDB.passwordDigest, (error, result) => {
            if (result) {
               req.session.user = userInDB;
               res.redirect('/user/movies');
            } else {
               res.redirect('login');
             }
          });
       }).catch((error) => {
        res.redirect('login');
     });
});


module.exports = router;
