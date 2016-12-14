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
   db.Messages.findAll({
      where: {
         receiverId: {
            $or: [req.params.id, req.session.user.id]
         },
         senderId: {
            $or: [req.params.id, req.session.user.id]
         }
      }
   }).then((messages) => {

   db.User.findOne({
      where: {
         id: req.session.user.id
      }
   }).then((user) => {
      var userName = user.name;

      db.User.findOne({
         where: {
            id: req.params.id
         }
      }).then((receiver) => {
      var receiverName = receiver.name;

      receiverId = req.session.user.id;
      senderId = req.params.id;


         console.log('receiverId is:');
         console.log(receiverId);
         console.log('senderId is:');
         console.log(senderId);
         console.log('userName:');
         console.log(userName);
         console.log('receiverName:');
         console.log(receiverName);


           res.render('users/chat', {
             user: req.session.user,
             match: req.params.id,
             messages: messages,
             receiverName: receiver.name,
             userName: user.name

            });
         });
      });
   });
});

router.post('/messages/:id', (req, res) => {
   db.Messages.create(req.body).then(() => {
      res.redirect('/messages/' + req.body.receiverId);
   });
});

module.exports = router;
