Overwatch Counter Calculator
=========================================

Author: Brady Ericksen  
Email Address: bradyericksen@gmail.com

The purpose of this project is to create a helpful visual tool to help decide on team composition based on the enemy team.  
Many times when playing, my team will have a hard time dealing with a specific hero on the enemy team. When this happens, some of us may not know the correct counter to deal with them or we may not realize that the hero counterse our team composition.  
The design of this project is intended for multiple monitor set-ups, such that this calculator can reside in one of the secondary monitors for quick reference during gameplay.

## NPM Assignment:
The latest build includes implementation of node (you can run this simply by opening index.html or by using node), as well as the following node packages: *colors*, *winston*, and *nconf*.
To see these in action, run ```node server.js``` from the command line.

**nconf**: nconf is used to set a default port variable of 3000, but the user can add a designated port using the command line, for example: ```node server.js --port 3030```

**colors**: colors is used to output error messages in red. For an easy way to test this, supply a port number out of range or containing nonsense, for example: ```node server.js --port 325r923087v```

**winston**: winston is used for logging purposes. The current push (3/30/17) contains a owLogs.log file from my testing created by winston. Each time you run the server, this file will be updated.

## Mongo Assignment:
The latest build also includes implementation of a Mongo database. As of now, the HTML does not list the results, but the server console does.

To Create/Insert a new document, traverse to localhost:port/api/v1/notes/init with a document or array of documents in the request body, i.e. ```[{"_id" : 1, "character" : "genji", "text" : "Use a hero with a beam weapon to avoid deflect"}, {"_id" : 2, "character" : "roadhog", "text" : "Hook cooldown is 8 seconds"}]```
Note that using ```character``` to define the hero name is important to GET that hero's notes.


To Read a document, traverse to localhost:port/api/v1/notes/hero where ```hero``` is a given hero name.

To Update a document, traverse to localhost:port/api/v1/notes/hero.json where ```hero``` is a given hero name and the request body includes the data you want updated, i.e. ```{"text": "Avoid the Nanoblade!"}```

To Delete a document, traverse to localhost:port/api/v1/notes/delete/hero where ```hero``` is a given hero name.

To get a List of all documents, traverse to localhost:port/api/v1/notes.json
#### Features:
* Color-coded representation of each heroes counters and 'countered-by'
* Images for use of quick selection, rather than trying to remember a heroes name (for new players)
* Team composition select boxes for both teams which display bootstrap alerts based on problems in composition

#### In-Progress:
* Update hero counters and 'countered-by' after researching and consulting other players
* Display specific hero-based tips based on enemy team composition, i.e. "Enemy Team has a Pharah, you should consider 1-2 hitscan heroes like Soldier, Widow, or McCree"
* Display ally and enemy team Ultimate Ability synergies.
* Allow filters to List specific heroes.
* Update HTML/Angular to display notes information.

#### Screenshots:
* Color coding counter example:
![Counters by color](https://github.com/RaptureBTP/overwatch-calc/blob/master/example1.PNG)
* Team composition example
![Enemy and Ally team composition with alerts](https://github.com/RaptureBTP/overwatch-calc/blob/master/example2.PNG)