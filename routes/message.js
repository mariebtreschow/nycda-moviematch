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




module.exports = router;
