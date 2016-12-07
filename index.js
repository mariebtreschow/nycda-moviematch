const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      displayRoutes = require('express-routemap'),
      methodOverride = require('method-override'),
      session = require('express-session'),
      base64url = require('base64url'),
      bcrypt = require('bcrypt'),
      morgan = require('morgan');

var app = express(),
    db = require('./models');

const userRouter = require('./routes/user'),
      authenticationRouter = require('./routes/authentication'),
      movieRouter = require('./routes/movie');

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

app.use('/', userRouter);

app.use('/', authenticationRouter);

app.use('/', movieRouter);


app.get('/', (req, res) => {
   res.render('homepage');
});

app.get('/users/:id', (req, res) => {
   // this will be other users profile
});

db.sequelize.sync({}).then(() => {
   app.listen(3000, (req, res) => {
      displayRoutes(app);
      console.log('App listening on 3000!');
   });
});
