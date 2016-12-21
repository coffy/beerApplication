var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var score = new Schema({
      id         : String
    , beer       : Boolean
    , brewery    : String
    , type       : String
    , aroma      : {
         text       : String
        ,value      : Number
    }
    , flavor     : {
         text       : String
        ,value      : Number
    }
    , mouthfeel  : {
         text       : String
        ,value      : Number
    }
    , appearance : {
         text       : String
        ,value      : Number
    }
    , overall    : {
         text       : String
        ,value      : Number
    }
    , date       : Date
});

//get scores from db
score.statics.getAllScores = function(callback) {

    var allScores = [];

    // Query the db, using skip and limit to achieve page chunks
    BeerScoreModel.find(function(err, docs){
        if(!err){
            allScores = docs;
        }
    });

    callback(allScores);
};

score.createScore = function(json, callback){


};

score.deleteScore = function(id, callback){


};


score.editScore = function(id, callback){


};



module.exports = BeerScoreModel = mongoose.model('BeerScoreModel', score);
