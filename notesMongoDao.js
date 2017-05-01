/**
 * Created by brady on 4/13/2017.
 */
//CRUDL for tasks stored on MongoDB

let mongo = require('mongodb').MongoClient;
let ObjectID = require('mongodb').ObjectID;
const URL = `mongodb://127.0.0.1:27017/overwatchNotes`;
//let sample = [{"text" : "buy groceries","done" : false},{"text" : "pay kids to pick up dog poop","done" : false},{"text": "use id on the plus sign","done" : true},{"text" : "task","done" : false}];
//let sample2 = [{"text" : "finish list","done" : false},{"text" : "create counters","done" : false}];

exports.create = function(data, callbackFunc) {
    mongo.connect(URL, function (err, db) {
        if (err) throw err;
        console.log("Connected correctly to server");


        db.collection('notes').insertMany(data, function (err, result) { //if it doesnt exist, it will create it
            if (err) throw err;
            console.log(result);
            db.close();
        });
    })
};

exports.read = function(hero, callbackFunc) {
    mongo.connect(URL, function(err, db) {
        if (err) throw err;

        db.collection('notes').findOne({ character : hero}, {}, function(err, result) { //new ObjectID(id)
            if (err) throw err;
            //console.log('in read()');
            console.log(result);
            //callbackFunc(err, result);
            db.close();
        });
    });
};

exports.update = function(hero, data, callbackFunc) {
    mongo.connect(URL, function(err, db) {
        if (err) throw err;

        db.collection('notes').updateOne(
                {character: hero},
                {$set: data},
                function(err, result) {
                    if(err) throw err;
                    //console.log(result);
                    db.close();
                }
            )
    })
};


exports.delete = function(hero, callbackFunc) {
    mongo.connect(URL, function(err, db) {
        if (err) throw err;

        db.collection('notes').deleteOne(
                {character : hero}, function(err, result) {
                    console.log('Deleted ' + hero);
                    db.close();
                }
            )
    })
};

exports.list = function(callbackFunc) {
    mongo.connect(URL, function(err, db) {
        if (err) throw err;

        db.collection('notes').find().forEach(function (result) {
            //console.log('In List()');
            console.log(result);
            db.close();
        })
    })
};