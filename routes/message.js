const express = require('express'),
      db = require('../models'),
      router = express.Router();


router.get('/messages', (req, res) => {
   db.UserMatchRequest.findAll({
     where: {
       requestId: {
         $in: [
           db.sequelize.literal(`SELECT "targetId" FROM "UserMatchRequests" WHERE "requestId" = ${req.session.user.id}`)
         ]
       }
     }
  }).then((matches) => {
     var idsOfTheMatches = matches.map((match) => {
        if (req.session.id === match.requestId) {
           return match.targetId;
        } else {
           return match.requestId;
        }
     });

     db.User.findAll({
        where: {
           id: {
             $in: idsOfTheMatches
          }
        }
     }).then((matchedUsers) => {
        res.render('users/message', { user: req.session.user, matchedUsers: matchedUsers });
     });
  });
});

router.get('/messages/:id', (req, res) => {

   res.render('users/chat', { user: req.session.user, match: req.params.id });
});

router.post('/messages/:id', (req, res) => {

   db.Messages.create(req.body).then(() => {
      res.redirect('/messages/' + req.body.receiverId);
      
      console.log('req prams id:');
      console.log(req.params.id);
      console.log('req body recieverId:');
      console.log(req.body.receiverId);

   });
});

module.exports = router;
