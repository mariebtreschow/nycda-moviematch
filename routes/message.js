const express = require('express'),
      db = require('../models'),
      router = express.Router();


router.get('/messages', (req, res) => {
   res.render('users/message', { user: req.session.user });
});


module.exports = router;
