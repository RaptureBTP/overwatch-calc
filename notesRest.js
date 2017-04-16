/**
 * Created by brady on 4/13/2017.
 */
//Rest Module is called by http requests
//converts req info to be used by dao crud
//converts dao output into res info
let express = require('express');
let bodyParser = require('body-parser');
let task = require('./notesMongoDao');
let router = express.Router();

//middleware
router.use(bodyParser.json()); //used for post and put

//REST endpoints

//Create
router.post('/notes/init', function(req, res, next) { //needs data to be posted
    console.log(req.body);
    task.create(req.body);
    res.status(200).redirect('../../../index.html');
    //res.status(200).send(`Create should have happened here`); //change this to like, notes.html which then lists the character notes?
});

//Read
router.get('/notes/:hero', function(req, res, next) {
    let hero = req.params.hero;
    task.read(hero);
//     exports.read('58cac043bf90ee89def02b27', function(err, task) {
//   if (err) throw err;

//   console.log('in callbackFunc()')
//   console.log(task);
// });
    res.status(203).redirect('../../../index.html');
    //res.send(`Read hero ${hero} successfully!`).status(203); //change this
    // res.send(`Read ${id}`).status(203);
});

//Update
router.put('/notes/:hero.json', function(req, res, next) {
    let hero = req.params.hero;
    let updateData = req.body;
    task.update(hero, updateData);
    console.log(`Updating ${hero}`);
    //res.status(204).redirect('../../../index.html');
    res.status(200).send(`Updated ${hero} notes`);
});

//Delete
router.delete('/notes/delete/:hero', function(req, res, next) {
    let hero = req.params.hero;
    task.delete(hero); //or hero
    //res.status(200).redirect('../../index.html');
    res.status(200).send(`Deleted ${hero} notes`);
});

//List
router.get('/notes.json', function(req, res, next) {
    task.list();
    res.status(200).redirect('../../index.html');
    //res.status(200).send(`List would be here`);
});

module.exports = router;