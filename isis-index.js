const Sequelize = require('sequelize'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      // displayRoutes = require('express-routemap'),
      // session = require('express-session'),
      // bcrypt = require('bcrypt'),
      morgan = require('morgan');
      express = require('express');

var db = require('./models');

var app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded());


var sequelize = new Sequelize('isisvanderplas', 'isisvanderplas', { dialect: 'postgres'});

sequelize model:create --name Movie --attributes title:string,coverImageURL:string,trailer:string,slug:string,directorName:string,actorNames:string,language:string,subtitles:string,genre:string,lengthInMin:integer,description:text;



app.get('/', (req,res) => {
  res.render('homepage');
});

app.post('posts/newmovie', (req, res) => {
  console.log(req.body);
});





// sequelize.sync({})
app.listen(3000, (req, res) => {
   console.log('App listening on 3000!');
});
