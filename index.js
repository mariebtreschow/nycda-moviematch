const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      // methodOverride = require('method-override'),
      // displayRoutes = require('express-routemap'),
      // session = require('express-session'),
      // bcrypt = require('bcrypt'),
      morgan = require('morgan');

var app = express();
    // db = require('./models');

var userRouter = require('./routes/user');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());
//
// app.use(methodOverride((req, res) => {
//    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//       var method = req.body._method;
//
//       delete req.body._method;
//       return method;
//    }})
// );

// app.use(session({
//    secret: 'secret key',
//    resave: true,
//    saveUninitialized: true
//  }));
//




app.set('view engine', 'pug');

// app.get('/', userRouter);

app.get('/', (req,res) => {
  res.render('homepage');
});

app.get('/about', (req,res) => {
  res.render('about');
});

app.get('/layout', (req,res) => {
  res.render('movie-layout');
});

app.listen(3000, (req, res) => {
   console.log('App listening on 3000!');
});
