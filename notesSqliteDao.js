/**
 * Created by brady on 4/13/2017.
 */
//CRUDL for tasks stored on MongoDB

let sqlite3 = require('sqlite3').verbose();

exports.create = function(data, callbackFunc) {

    //let db = new sqlite3.Database(':memory:');
    let db = new sqlite3.Database('./owDB');
    db.serialize(function() {
        db.run("CREATE TABLE IF NOT EXISTS owNotes (character TEXT, info TEXT)");
        //console.log(data);

        data.forEach(function(addition) {
            let stmt = db.prepare("INSERT INTO owNotes (character, info) VALUES (?, ?)");
            //console.log(addition);
            //console.log(addition.character, addition.text);
            stmt.run(addition.character, addition.text);
            //stmt = db.prepare("INSERT INTO owNotes (info) VALUES (?)");
            //stmt.run(addition.text);
            stmt.finalize();
        });

        console.log("Created the following in ./owDB :");
        db.each("SELECT rowid AS id, character, info FROM owNotes", function(err, row) {
            console.log(row.id + ": " + row.character + " : " + row.info);
        });
    });

    db.close();
};

exports.read = function(hero, callbackFunc) {
    // mongo.connect(URL, function(err, db) {
    //     if (err) throw err;
    //
    //     db.collection('notes').findOne({ character : hero}, {}, function(err, result) { //new ObjectID(id)
    //         if (err) throw err;
    //         console.log('in read()');
    //         console.log(result);
    //         //callbackFunc(err, result);
    //         db.close();
    //     });
    // });
};

exports.update = function(hero, data, callbackFunc) {
    // mongo.connect(URL, function(err, db) {
    //     if (err) throw err;
    //
    //     db.collection('notes').updateOne(
    //             {character: hero},
    //             {$set: data},
    //             function(err, result) {
    //                 if(err) throw err;
    //                 console.log(result);
    //                 db.close();
    //             }
    //         )
    // })
};


exports.delete = function(hero, callbackFunc) {
    // mongo.connect(URL, function(err, db) {
    //     if (err) throw err;
    //
    //     db.collection('notes').deleteOne(
    //             {character : hero}, function(err, result) {
    //                 console.log('in delete()');
    //                 db.close();
    //             }
    //         )
    // })
};

exports.list = function(callbackFunc) {
    // mongo.connect(URL, function(err, db) {
    //     if (err) throw err;
    //
    //     db.collection('notes').find().forEach(function (result) {
    //         console.log('In List()');
    //         console.log(result);
    //         db.close();
    //     })
    // })
};