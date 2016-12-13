const express = require('express'),
      db = require('../models'),
      router = express.Router();


router.get('/messages', (req, res) => {
   db.UserMatchRequest.findAll({
      where: {
         targetId: req.session.user.id
      } // or this will be requestId
   }).then
});

   res.render('users/message', { user: req.session.user });
});



module.exports = router;
