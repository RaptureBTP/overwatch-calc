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

        data.forEach(function(addition) {
            let stmt = db.prepare("INSERT INTO owNotes (character, info) VALUES (?, ?)");
            //console.log(addition);
            //console.log(addition.character, addition.text);
            stmt.run(addition.character, addition.text);
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
    let db = new sqlite3.Database('./owDB');
    db.serialize(function() {
        console.log("Read from ./owDB :");
        db.each("SELECT * FROM owNotes WHERE character=?", hero, function(err, row) {
            console.log(row.character + " : " + row.info);
        });
    });

    db.close();
};

exports.update = function(hero, data, callbackFunc) {
    let db = new sqlite3.Database('./owDB');
    db.serialize(function() {
        db.run("UPDATE owNotes SET info = ? WHERE character=?", [data.text, hero]);
        //console.log("Updated from ./owDB :");
        db.each("SELECT * FROM owNotes WHERE character=?", hero, function(err, row) {
            console.log(row.character + " : " + row.info);
        });
    });

    db.close();
};


exports.delete = function(hero, callbackFunc) {
    let db = new sqlite3.Database('./owDB');
    db.serialize(function() {
        db.run("DELETE FROM owNotes WHERE character=?", hero, function(err, result) {
            console.log("Deleted " + hero);
        });
    });

    db.close();
};

exports.list = function(callbackFunc) {
    //let db = new sqlite3.Database(':memory:');
    let db = new sqlite3.Database('./owDB');
    db.serialize(function() {
        //console.log("Created the following in ./owDB :");
        db.each("SELECT * FROM owNotes", function(err, row) {
            console.log(row.character + " : " + row.info);
        });
    });

    db.close();
};