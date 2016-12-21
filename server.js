var path  = require( 'path');
var Express  = require( 'express');
var handlebars  = require( 'express-handlebars');
var mongoose = require('mongoose');
var BeerScoreModel = require('./mongoModels/BeerScoreModel');



// initialize the server
const app = new Express();

// templating with handlebars engine;
var tmplHandlebars = handlebars.create({});
app.engine('handlebars', tmplHandlebars.engine);
app.set('view engine', 'handlebars');

app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){

  // render the index template with the embedded
  return res.render('index');
});


// start the server
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

app.listen( port, function() {

  console.log('Server running on http://localhost: ' + port + '-' + env);
});
