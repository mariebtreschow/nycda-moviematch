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


var userRouter = require('./routes/user'),
    adminRouter = require('./routes/admin');

var authenticationRouter = require('./routes/authentication');
var registrationRouter = require('./routes/registration');



app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extendend: true }));

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

app.use('/login', authenticationRouter);

app.use('/register', registrationRouter);

app.use('/admin', adminRouter);


// app.get('/', (req,res) => {
//   res.render('homepage');
// });

app.get('/', (request,response) => {
  db.Movie.findAll({ order: 'id ASC' }).then((movies) => {
    response.render('admin/movies/index', { movies: movies });
  });
});


app.get('/logout', (request, response) => {
  request.session.user = undefined;
  response.redirect('/');
});


app.get('/logout', (req, res) => {
   req.session.user = undefined;
   res.redirect('/');
});

db.sequelize.sync({}).then(() => {
   app.listen(3000, (req, res) => {
      console.log('App listening on 3000!');
   });
});
