var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var score = new Schema({
      id         : String
    , beer       : String
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


score.statics.getAllBeers = function(callback) {

    BeerScoreModel.find(function(err, docs){
        if(!err){
            callback(docs);
        }else{
            callback({}, err);
        }
    });


};

score.statics.createBeerTasting = function(json, callback){

    BeerScoreModel.create(
        json,
        function(err, doc){
            if (!err){

                BeerScoreModel.find(function(err, docs) {
                    if (!err){

                        callback(docs)
                    }else{
                        callback({}, err);
                    }
                });

            }else{
                callback({}, err);
            }
    });

};

score.statics.deleteBeerTasting = function(id, callback){

    BeerScoreModel.remove({
        _id: id
    },function(err, doc){
        if (!err){

            BeerScoreModel.find(function(err, docs) {
                if (!err){

                    callback(docs)
                }else{
                    callback({}, err);
                }
            });

        }else{
            callback({}, err);
        }
    });

};


score.statics.editBeerTasting = function(id, callback){


};



module.exports = BeerScoreModel = mongoose.model('BeerScoreModel', score);
