Overwatch Counter Calculator
=========================================

Author: Brady Ericksen  
Email Address: bradyericksen@gmail.com

The purpose of this project is to create a helpful visual tool to help decide on team composition based on the enemy team.  
Many times when playing, my team will have a hard time dealing with a specific hero on the enemy team. When this happens, some of us may not know the correct counter to deal with them or we may not realize that the hero counters our team composition.  
The design of this project is intended for multiple monitor set-ups, such that this calculator can reside in one of the secondary monitors for quick reference during gameplay.

## Requirements:
To use the Notes database features of this application, you'll need to have Nodejs and MongoDB installed on your computer, though the visual counter display and team composition work regardless.

## NPM:
The latest build includes implementation of Nodejs, as well as the following node packages: *colors* and *nconf*.
To see these in action, run ```node index.js``` from the command line.

**nconf**: nconf is used to set a default port variable of 3000, but the user can add a designated port using the command line, for example: ```node index.js --port 3030```

**colors**: colors is used to output error messages in red. For an easy way to test this, supply a port number out of range or containing nonsense, for example: ```node index.js --port 325r923087v```

## Mongo:
The latest build also includes implementation of a Mongo database.

To Create/Insert a new document, traverse to localhost:port/api/v1/notes/init with a document or array of documents in the request body, i.e. ```[{"character" : "genji", "text" : "Use a hero with a beam weapon to avoid deflect"}, {""character" : "roadhog", "text" : "Hook cooldown is 8 seconds"}]```
Note that using ```character``` to define the hero name is important to GET that hero's notes. You can also use the built-in forms on the GUI to create notes.

To Read a document, traverse to localhost:port/api/v1/notes/hero where ```hero``` is a given hero name.

To Update a document, traverse to localhost:port/api/v1/notes/hero.json where ```hero``` is a given hero name and the request body includes the data you want updated, i.e. ```{"text": "Avoid the Nanoblade!"}```

To Delete a document, traverse to localhost:port/api/v1/notes/delete/id where ```id``` is the notes unique ObjectID OR click the 'x' icon next to a note.

To get a List of all documents, traverse to localhost:port/api/v1/notes.json OR click the "Load Notes" button.

#### Features:
* Color-coded representation of each heroes counters and 'countered-by'
* Images for use of quick selection, rather than trying to remember a heroes name (for new players)
* Team composition select boxes for both teams which display bootstrap alerts based on problems in composition
* RESTful Note taking feature implemented in GUI

#### In-Progress:
* Display specific hero-based tips based on enemy team composition, i.e. "Enemy Team has a Pharah, you should consider 1-2 hitscan heroes like Soldier, Widow, or McCree"
* Display ally and enemy team Ultimate Ability synergies.
* Allow filters to List specific heroes.

#### Screenshots:
* Color coding counter example:
![Counters by color](https://github.com/RaptureBTP/overwatch-calc/blob/master/new_example1.PNG)
* Extended View
![Extended](https://github.com/RaptureBTP/overwatch-calc/blob/master/new_example2.PNG)
* Team composition example
![Enemy and Ally team composition with alerts](https://github.com/RaptureBTP/overwatch-calc/blob/master/new_example3.PNG)
* Loaded notes from Mongo database
![Loaded notes from Mongo database](https://github.com/RaptureBTP/overwatch-calc/blob/master/new_example4.PNG)