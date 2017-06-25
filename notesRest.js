/**
 * Created by brady on 4/13/2017.
 */
//Rest Module is called by http requests
//converts req info to be used by DAO CRUD
//converts DAO output into res info
let express = require('express');
let bodyParser = require('body-parser');
let task = require('./notesMongoDao');
let router = express.Router();

//middleware
router.use(bodyParser.json()); //used for post and put

//REST endpoints

//Create
router.post('/notes/init', function(req, res) { //needs data to be posted //next param at end?
    console.log("Data to be inserted : " + req.body); //logs
    task.create(req.body);
    res.status(200).redirect('../../../index.html'); //when front end notes are done, remove redirect?
});

//Read
router.get('/notes/:hero', function(req, res) {
    let hero = req.params.hero;
    task.read(hero);
    res.status(203).redirect('../../../index.html');
    //res.send(`Read hero ${hero} successfully!`).status(203);
});

//Update
router.put('/notes/update/:hero.json', function(req, res) {
    let hero = req.params.hero;
    //let updateData = req.body;
    task.update(hero, req.body);
    console.log(`Updating ${hero}`);
    //res.status(204).redirect('../../../index.html'); //update notes to use Angular asynchronously updating
    res.status(200).send(`Updated ${hero} notes`);
});

//Delete
router.delete('/notes/delete/:hero', function(req, res) {
    let hero = req.params.hero;
    task.delete(hero);
    //res.status(200).redirect('../../index.html');
    res.status(200).send(`Deleted ${hero} notes`);
});

//List
router.get('/notes.json', function(req, res) {
    task.list();
    res.status(200).redirect('../../index.html');
});

module.exports = router;