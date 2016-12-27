var path  = require( 'path');
var Express  = require( 'express');
var handlebars  = require( 'express-handlebars');
var mongoose = require('mongoose');
var BeerScoreModel = require('./mongoModels/BeerScoreModel');



// initialize the server
const app = new Express();

mongoose.connect('mongodb://gmfel:mongogil@ds141428.mlab.com:41428/beerscoring');


// templating with handlebars engine;
var tmplHandlebars = handlebars.create({});
app.engine('handlebars', tmplHandlebars.engine);
app.set('view engine', 'handlebars');

app.use(Express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  // render the index template with the embedded
  return res.render('index');
});


app.get('/scores', function(req, res){
  BeerScoreModel.getAllBeers(

      function(beers, err){
        if(err){
          res.send(err);
        }
        res.send(beers);
      }
  );
});

  // create tasting beer record
app.post('/score', function(req, res){

  console.log(req);
  // render the index template with the embedded
  BeerScoreModel.createBeerTasting(res.body,
      function(beers, err){
        if(err){
          res.send(err);
        }
        res.send(beers);
      }
  );
});




app.delete('/score/:id', function(req, res){

    // render the index template with the embedded<
    BeerScoreModel.deleteBeerTasting(req.params.id,
        function(beers, err){
            if(err){
                res.send(err);
            }
            res.send(beers);
        }
    );
});


// start the server
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'production';

app.listen( port, function() {

  console.log('Server running on http://localhost: ' + port + '-' + env);
});
