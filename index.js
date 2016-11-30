const express = require('express'),
      pug = require('pug'),
      sequelize = require('sequelize'),
      bodyParser = require('body-parser'),
      displayRoutes = require('express-routemap'),
      methodOverride = require('method-override'),
      session = require('express-session'),
      base64url = require('base64url'),
      bcrypt = require('bcrypt'),
      morgan = require('morgan');

var app = express(),
     db = require('./models');

var userRouter = require('./routes/user');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride((req, res) => {
   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;

      delete req.body._method;
      return method;
   }})
);

app.use(session({
   secret: 'secret key',
   resave: true,
   saveUninitialized: true
 }));

app.set('view engine', 'pug');

app.use('/user', userRouter);

app.get('/register', (req, res) => {
   res.render('users/new');
});

app.post('/register', (req, res) => {
   db.User.create(req.body).then((user) => {
      res.redirect('/login');
   }).catch((error) => {
      console.log(error);
      res.render('users/new');
   });
});

app.get('/login', (req, res) => {
   console.log(req.session);
   res.render('login');
});

app.post('/login', (req, res) => {
   db.User.findOne({
      where: {
         email: req.body.email
      }
   }).then((userInDB) => {
      if (userInDB.password === req.body.password) {
         req.session.user = userInDB;
         res.redirect('/user/movies');
      } else {
         res.redirect('login');
      }

   }).catch((error) => {
      res.redirect('login');
   });
});

app.get('/logout', (req, res) => {
   req.session.user = undefined;
   res.redirect('/');
});

app.listen(3000, (req, res) => {
   console.log('App listening on 3000!');
});
