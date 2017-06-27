/**
 * Created by brady on 3/10/2017.
 */
//TODO: Put correct character counters in click functions
//TODO: Look over/Implement Jayson recs
//TODO: Create bootstrap messages based on enemy team comp: "Enemy Team has a Pharah, you should consider 1-2 hitscan heroes like Soldier, Widow, or McCree"
//TODO: ULT synergies
//TODO: Create array of each hero of each type (json), so I can see if Zen is the only healer. OR make it a variable in the counters.json

/* global $ */
angular.module("app", [])
    .factory('counterService', function($http) {
        //HTTP requests go here
        let counterService = {
            getCounters: function() {
                return $http.get('counters.json');
            }
        };
        return counterService;
    })
    .directive('jumbotronDirective', function(){
        return {
            template: '<div class="jumbotron text-center"> <h1>Overwatch Planner</h1> <p>Use this page to plan your team composition and hero counters for your next game!</p> <p>Click a Hero below to see who they counter and are countered by.</p> </div>'
        };
    })
    .controller('overwatchController', ['$scope', 'counterService', '$http', function($scope, $counterService, $http) {
        const BLUE = "#4286f4";
        const GREEN = "#33e84b";
        const RED = "#ef3232";

        enemyRolesReset();
        allyRolesReset();

        $scope.selectionMadeEnemy = false;
        $scope.selectionMadeAlly = false;

        $scope.allHeroes = ['Genji', 'McCree', 'Pharah', 'Reaper', 'Soldier76', 'Sombra', 'Tracer', 'Bastion', 'Hanzo', 'Junkrat', 'Mei', 'Torbjorn', 'Widowmaker', 'D.Va', 'Orisa',
            'Reinhardt', 'Roadhog', 'Winston', 'Zarya', 'Ana', 'Lucio', 'Mercy', 'Symmetra', 'Zenyatta'];

        $scope.notes = [];

        $counterService.getCounters().then(function (res) {
            $scope.counters = res.data;
        });

        function enemyRolesReset() {
            $scope.enemy_dps = 0;
            $scope.enemy_tanks = 0;
            $scope.enemy_support = 0;
            $scope.enemy_projectiles = 0;
            $scope.enemy_hitscan = 0;
            $scope.enemy_mobility = 0;
            $scope.enemy_sustain = 0;
            $scope.enemy_beam = 0;
            $scope.enemy_block = 0;
            $scope.enemy_builder = 0;
        }

        function allyRolesReset() {
            $scope.ally_dps = 0;
            $scope.ally_tanks = 0;
            $scope.ally_support = 0;
            $scope.ally_projectiles = 0;
            $scope.ally_hitscan = 0;
            $scope.ally_mobility = 0;
            $scope.ally_sustain = 0;
            $scope.ally_beam = 0;
            $scope.ally_block = 0;
            $scope.ally_builder = 0;
        }

        $scope.test =function(msg){
            //console.log(msg);
            console.log($scope.newNoteText);
        };

        $scope.getNotes = function(){
            console.log("In getNotes");
            $http.get('api/v1/notes.json').then(displayNotes);
        };

        function displayNotes(notes){
            console.log("In display notes");
            $scope.notes = notes.data;
            console.log($scope.notes);
        }

        $scope.heroSelected = function (hero, team) {
            if (team === "enemy") {
                enemyRolesReset();
                $scope.selectionMadeEnemy = true;
                $('.enemyTeam option:selected').each(function () {
                    hero = $(this).text();
                    if (hero !== '') {
                        switch(hero) {
                            case "Genji":
                                $scope.enemy_dps += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_mobility += 1;
                                break;
                            case "McCree":
                                $scope.enemy_dps += 1;
                                $scope.enemy_hitscan += 1;
                                break;
                            case "Pharah":
                                $scope.enemy_dps += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_mobility += 1;
                                break;
                            case "Reaper":
                                $scope.enemy_dps += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Soldier76":
                                $scope.enemy_dps += 1;
                                $scope.enemy_hitscan += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Sombra":
                                $scope.enemy_dps += 1;
                                $scope.enemy_hitscan += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Tracer":
                                $scope.enemy_dps += 1;
                                $scope.enemy_hitscan += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Bastion":
                                $scope.enemy_dps += 1;
                                $scope.enemy_hitscan += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Hanzo":
                                $scope.enemy_dps += 1;
                                $scope.enemy_projectiles += 1;
                                break;
                            case "Junkrat":
                                $scope.enemy_dps += 1;
                                $scope.enemy_projectiles += 1;
                                break;
                            case "Mei":
                                $scope.enemy_dps += 1;
                                $scope.enemy_beam += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_block += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Torbjorn":
                                $scope.enemy_dps += 1;
                                $scope.enemy_builder += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Widowmaker":
                                $scope.enemy_dps += 1;
                                $scope.enemy_hitscan += 1;
                                $scope.enemy_mobility += 1;
                                break;
                            case "D.Va":
                                $scope.enemy_tanks += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_block += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Orisa":
                                $scope.enemy_tanks++;
                                $scope.enemy_block += 2;
                                break;
                            case "Reinhardt":
                                $scope.enemy_tanks += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_block += 2;
                                break;
                            case "Roadhog":
                                $scope.enemy_tanks += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_sustain += 1;
                                $scope.enemy_dps += 1;
                                break;
                            case "Winston":
                                $scope.enemy_tanks += 1;
                                $scope.enemy_beam += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_block += 1;
                                break;
                            case "Zarya":
                                $scope.enemy_tanks += 1;
                                $scope.enemy_dps += 1;
                                $scope.enemy_beam += 1;
                                $scope.enemy_block += 1;
                                $scope.enemy_projectiles += 1;
                                break;
                            case "Ana":
                                $scope.enemy_support += 1;
                                $scope.enemy_hitscan += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_sustain += 2;
                                break;
                            case "Lucio":
                                $scope.enemy_support += 1;
                                $scope.enemy_mobility += 2;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Mercy":
                                $scope.enemy_support += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_sustain += 1;
                                break;
                            case "Symmetra":
                                $scope.enemy_dps += 1;
                                $scope.enemy_mobility += 1;
                                $scope.enemy_block += 1;
                                $scope.enemy_beam += 1;
                                break;
                            case "Zenyatta":
                                $scope.enemy_support += 1;
                                $scope.enemy_dps += 1;
                                $scope.enemy_projectiles += 1;
                                $scope.enemy_sustain += 1;
                                break;
                        }
                    }
                });
            }
            else if (team === 'ally') {
                allyRolesReset();
                $scope.selectionMadeAlly = true;
                $('.allyTeam option:selected').each(function () {
                    hero = $(this).text();
                    if (hero !== '') {
                        switch(hero){
                            case "Genji":
                                $scope.ally_dps += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_mobility += 1;
                                break;
                            case "McCree":
                                $scope.ally_dps += 1;
                                $scope.ally_hitscan += 1;
                                break;
                            case "Pharah":
                                $scope.ally_dps += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_mobility += 1;
                                break;
                            case "Reaper":
                                $scope.ally_dps += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Soldier76":
                                $scope.ally_dps += 1;
                                $scope.ally_hitscan += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Sombra":
                                $scope.ally_dps += 1;
                                $scope.ally_hitscan += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Tracer":
                                $scope.ally_dps += 1;
                                $scope.ally_hitscan += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Bastion":
                                $scope.ally_dps += 1;
                                $scope.ally_hitscan += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Hanzo":
                                $scope.ally_dps += 1;
                                $scope.ally_projectiles += 1;
                                break;
                            case "Junkrat":
                                $scope.ally_dps += 1;
                                $scope.ally_projectiles += 1;
                                break;
                            case "Mei":
                                $scope.ally_dps += 1;
                                $scope.ally_beam += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_block += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Torbjorn":
                                $scope.ally_dps += 1;
                                $scope.ally_builder += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Widowmaker":
                                $scope.ally_dps += 1;
                                $scope.ally_hitscan += 1;
                                $scope.ally_mobility += 1;
                                break;
                            case "D.Va":
                                $scope.ally_tanks += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_block += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Orisa":
                                $scope.ally_tanks++;
                                $scope.ally_block +=2;
                                break;
                            case "Reinhardt":
                                $scope.ally_tanks += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_block += 2;
                                break;
                            case "Roadhog":
                                $scope.ally_tanks += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_sustain += 1;
                                $scope.ally_dps += 1;
                                break;
                            case "Winston":
                                $scope.ally_tanks += 1;
                                $scope.ally_beam += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_block += 1;
                                break;
                            case "Zarya":
                                $scope.ally_tanks += 1;
                                $scope.ally_dps += 1;
                                $scope.ally_beam += 1;
                                $scope.ally_block += 1;
                                $scope.ally_projectiles += 1;
                                break;
                            case "Ana":
                                $scope.ally_support += 1;
                                $scope.ally_hitscan += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_sustain += 2;
                                break;
                            case "Lucio":
                                $scope.ally_support += 1;
                                $scope.ally_mobility += 2;
                                $scope.ally_projectiles += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Mercy":
                                $scope.ally_support += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_sustain += 1;
                                break;
                            case "Symmetra":
                                $scope.ally_dps += 1;
                                $scope.ally_mobility += 1;
                                $scope.ally_block += 1;
                                $scope.ally_beam += 1;
                                $scope.ally_builder += 1;
                                break;
                            case "Zenyatta":
                                $scope.ally_support += 1;
                                $scope.ally_dps += 1;
                                $scope.ally_projectiles += 1;
                                $scope.ally_sustain += 1;
                                break;
                        }
                    }
                });
            }
        };

        $scope.displayCounters = function (clickedHero) {
            reset();
            $('.' + clickedHero).css("background-color", BLUE);
            for (let i = 0; i < $scope.counters.length; i++) {
                let hero = $scope.counters[i];
                if (hero.name === clickedHero) {
                    for (let j = 0; j < hero.counters.length; j++) {
                        $('.' + hero.counters[j]).css("background-color", GREEN);
                    }
                    for (let k = 0; k < hero.counteredBy.length; k++) {
                        $('.' + hero.counteredBy[k]).css("background-color", RED);
                    }
                }
            }
        };

        function reset() {
            $('.genji').css('background-color', 'transparent');
            $('.mccree').css('background-color', 'transparent');
            $('.pharah').css('background-color', 'transparent');
            $('.reaper').css('background-color', 'transparent');
            $('.soldier76').css('background-color', 'transparent');
            $('.sombra').css('background-color', 'transparent');
            $('.tracer').css('background-color', 'transparent');
            $('.bastion').css('background-color', 'transparent');
            $('.hanzo').css('background-color', 'transparent');
            $('.junkrat').css('background-color', 'transparent');
            $('.mei').css('background-color', 'transparent');
            $('.torb').css('background-color', 'transparent');
            $('.widow').css('background-color', 'transparent');
            $('.dva').css('background-color', 'transparent');
            $('.orisa').css('background-color', 'transparent');
            $('.rein').css('background-color', 'transparent');
            $('.roadhog').css('background-color', 'transparent');
            $('.winston').css('background-color', 'transparent');
            $('.zarya').css('background-color', 'transparent');
            $('.ana').css('background-color', 'transparent');
            $('.lucio').css('background-color', 'transparent');
            $('.mercy').css('background-color', 'transparent');
            $('.symmetra').css('background-color', 'transparent');
            $('.zen').css('background-color', 'transparent');
        }
    }]);