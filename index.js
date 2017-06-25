/**
 * Created by brady on 3/28/2017.
 */
let express = require("express");
let app     = express();
let colors = require('colors');
let fs    = require('fs');
let nconf = require('nconf');
let path    = require("path");
let rest = require('./notesRest');
//const WEB = `${__dirname}`;


nconf.argv()
    .env();
nconf.defaults({
    'defaultPort': 3000
});

try {
    app.use(express.static(__dirname));
    app.use('/api/v1', rest);

    if(nconf.get('port')){
        if(Number.isInteger(nconf.get('port')) && (nconf.get('port') >= 0 && nconf.get('port') <= 65536)){
            console.log('User supplied port: ' + nconf.get('port'));
            app.listen(nconf.get('port'));
            console.log("Running at Port " + nconf.get('port'));
        }
        else console.log("User defined port invalid or outside of range".red);
    }
    else{
        //Handle 404's
        // app.get('*', function (req, res) {
        //     res.status(404).sendFile(`${WEB}/404.html`);
        // });

        app.listen(nconf.get('defaultPort'));
        console.log("Running at Port " + nconf.get('defaultPort'));
    }
}
catch (err) {
    //console.log('Error'.red);
    let myErr = err.toString();
    console.log(myErr.red);
}