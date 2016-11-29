const express = require('express'),
      pug = require('pug'),
      sequelize = require('sequelize'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      displayRoutes = require('express-routemap'),
      session = require('express-session'),
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

app.get('/', userRouter);

app.get('/register', (req, res) => {
   res.render('users/new');
});

app.post('/user', (req, res) => {
   db.User.create(req.body).then((user) => {
      res.redirect('/');
   }).catch((error) => {
      console.log(error);
      res.render('users/new');
   });
});

app.get('/login', (req, res) => {
   res.render('login');
});

app.post('/login', (req, res) => {
   db.User.findOne({
      where: {
         email: req.body.email
      }
   }).then((userInDB) => {
      bcrypt.compare(req.body.password, userInDB.passwordDigest , (error, result) => {
         if (result) {
            req.session.user = userInDB;
            res.redirect('/user/movies');
         } else {
            res.render('login');
         }
      });
   }).catch((error) => {
      res.render('login');
   });
});

app.listen(3000, (req, res) => {
   console.log('App listening on 3000!');
});
