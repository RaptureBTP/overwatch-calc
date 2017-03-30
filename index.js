/**
 * Created by brady on 3/28/2017.
 */
var express = require("express");
var app     = express();
var colors = require('colors');
var winston = require('winston');
var fs    = require('fs');
var nconf = require('nconf');
var path    = require("path");

nconf.argv()
    .env();
nconf.defaults({
    'defaultPort': 3000
});

winston.add(winston.transports.File, { filename: 'owLogs.log' });
nconf.set('site:host', '127.0.0.1');
//nconf.set('site:mainport', 3000);

try {
    app.use(express.static(__dirname));

    if(nconf.get('port')){
        if(Number.isInteger(nconf.get('port')) && (nconf.get('port') >= 0 && nconf.get('port') <= 65536)){
            winston.log('User supplied port: ' + nconf.get('port'));
            app.listen(nconf.get('port'));
            console.log("Running at Port " + nconf.get('port'));
        }
        else console.log("User defined port invalid or outside of range".red);
    }
    else{
        app.listen(nconf.get('defaultPort'));
        //app.listen(3000);
        //app.listen(49449499494949);
        console.log("Running at Port " + nconf.get('defaultPort'));
    }
}
catch (err) {
    //console.log('Error'.red);
    var myErr = err.toString();
    console.log(myErr.red);
    winston.log(myErr);
}

//console.log('Error: Not enough time in the day'.red); // outputs red text
winston.log('Test!');
winston.log('info', 'Hello log files!');
winston.info('Hello again logs');