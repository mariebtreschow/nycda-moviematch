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

// var userRouter = require('./routes/user');

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

const sequelize = require('sequelize'),
      sequelize = new sequelize('IsisvanderPlas', 'IsisvanderPlas', { dialect: 'postgres'});

var movie = sequelize.define('movie', {
  movieTitle: sequelize.STRING,
  coverImageURL: sequelize.STRING,
  movieTrailer: sequelize.STRING,
  movieSlug: sequelize.STRING,
  movieDirectorName: sequelize.STRING,
  movieActorNames: sequelize.STRING,
  language: sequelize.STRING,
  subtitles: sequelize.STRING,
  movieGenre: sequelize.STRING,
  lengthInMin: sequelize.INTEGER,
  movieDescription: sequelize.TEXT
});


app.set('view engine', 'pug');

// app.get('/', userRouter);

app.get('/', (req,res) => {
  res.render('homepage');
});



app.listen(3000, (req, res) => {
   console.log('App listening on 3000!');
});




// app.get('/newmovie', (req, res) => {
//   res.render('newmovie');
// });
//
// app.post('/newmovie', (req, res) => {
//   console.log(req.body);
//   res.redirect('/');
// });
//
// app.get('/movies', (req, res) => {
//   res.render('movies');
// });
