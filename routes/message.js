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
   var foundMessages, foundUser;

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
      foundMessages = messages;

      return db.User.findOne({
         where: {
            id: req.params.id
         }
      });
   }).then((user) => {
      foundUser = user;

      var messages = foundMessages.map((foundMessage) => {
         if (foundMessage.senderId === foundUser.id) {
            foundMessage.sender = foundUser;
         } else {
            foundMessage.sender = req.session.user;
         }

         return foundMessage;
      });


         console.log('THIS IS REQ BODY');
         console.log(req.body);

         res.render('users/chat', {
            user: req.session.user,
            matchedUser: req.params.id,
            match: foundUser,
            messages: messages


      });
   });
});

router.post('/messages/:id', (req, res) => {

   db.Messages.create(req.body).then(() => {
      res.redirect('/messages/' + req.body.receiverId);


   });
});

module.exports = router;
