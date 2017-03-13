##Overwatch Counter Calculator
=========================================

Author: Brady Ericksen
Email Address: bradyericksen@gmail.com

The purpose of this project is to create a helpful visual tool to help decide on team composition based on the enemy team.  
Many times when playing, my team will have a hard time dealing with a specific hero on the enemy team. When this happens, some of us may not know the correct counter to deal with them or we may not realize that the hero counterse our team composition.
The design of this project is intended for multiple monitor set-ups, such that this calculator can reside in one of the secondary monitors for quick reference during gameplay.

####Features:
* Color-coded representation of each heroes counters and 'countered-by'
* Images for use of quick selection, rather than trying to remember a heroes name (for new players)
* Team composition select boxes for both teams which display bootstrap alerts based on problems in composition

####In-Progress:
* Update hero counters and 'countered-by' after researching and consulting other players
* Display specific hero-based tips based on enemy team composition, i.e. "Enemy Team has a Pharah, you should consider 1-2 hitscan heroes like Soldier, Widow, or McCree"
* Display ally and enemy team Ultimate Ability synergies.
* Include a custom angular directive
* Implement ng-show/ng-hide rather than jQuery based .hide() and .show()