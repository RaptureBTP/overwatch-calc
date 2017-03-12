/**
 * Created by brady on 3/10/2017.
 */
//TODO: Put correct character counters in click functions
//TODO: Look over/Implement Jayson recs
//TODO: Create bootstrap messages based on enemy team comp: "Enemy Team ahs a Pharah, you should consider 1-2 hitscan heroes like Soldier, Widow, or McCree"
//TODO: ULT synergies
//TODO Create array of each hero of each type (json), so I can see if Zen is the only healer. OR make it a variable in the counters.json
//TODO: Create a json file of heroes and their counters
//TODO: Convert to angular
//TODO: Include an angular directive (?)
//TODO: Make readme.md
//TODO: Get ng-hide or ng-show working, or revert back to jQuery hide and show. Email professor?

/* global $ */
angular.module("app", [])
    .factory('counterService', function($http) {
        //HTTP requests go here
        var counterService = {
            getCounters: function() {
                return $http.get('counters.json');
            }
        };
        return counterService;
    })
    .controller('overwatchController', ['$scope', 'counterService', function($scope, $counterService) {
        const BLUE = "#4286f4";
        const GREEN = "#33e84b";
        const RED = "#ef3232";

        var enemy_dps = 0;
        var enemy_tanks = 0;
        var enemy_support = 0;
        var enemy_projectiles = 0;
        var enemy_hitscan = 0;
        var enemy_mobility = 0;
        var enemy_sustain = 0;
        var enemy_beam = 0;
        var enemy_block = 0;
        var enemy_builder = 0;

        var ally_dps = 0;
        var ally_tanks = 0;
        var ally_support = 0;
        var ally_projectiles = 0;
        var ally_hitscan = 0;
        var ally_mobility = 0;
        var ally_sustain = 0;
        var ally_beam = 0;
        var ally_block = 0;
        var ally_builder = 0;

        $scope.allHeroes = ['Genji', 'McCree', 'Pharah', 'Reaper', 'Soldier76', 'Sombra', 'Tracer', 'Bastion', 'Hanzo', 'Junkrat', 'Mei', 'Torbjorn', 'Widowmaker', 'D.Va', 'Reinhardt', 'Roadhog', 'Winston', 'Zarya', 'Ana', 'Lucio', 'Mercy', 'Symmetra', 'Zenyatta'];

        hideAlerts("ally");
        hideAlerts("enemy");


        $scope.heroSelected = function(hero, team) {
            //call reset variables function

            if (team == "enemy") {
                hideAlerts('enemy');
                $('.enemyTeam option:selected').each(function () {
                    hero = $(this).text();
                    if(hero != '') {
                        //console.log("Inside selections");
                        console.log(hero);
                        console.log('Team: ' + team);
                        if (hero == "Genji") {
                            enemy_dps += 1;
                            //console.log('After update dps #:' + enemy_dps);
                            enemy_projectiles += 1;
                            enemy_mobility += 1;
                        }
                        else if (hero == "McCree") {
                            enemy_dps += 1;
                            enemy_hitscan += 1;
                        }
                        else if (hero == "Pharah") {
                            enemy_dps += 1;
                            enemy_projectiles += 1;
                            enemy_mobility += 1;
                        }
                        else if (hero == "Reaper") {
                            enemy_dps += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Soldier76") {
                            enemy_dps += 1;
                            enemy_hitscan += 1;
                            enemy_mobility += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Sombra") {
                            enemy_dps += 1;
                            enemy_hitscan += 1;
                            enemy_mobility += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Tracer") {
                            enemy_dps += 1;
                            enemy_hitscan += 1;
                            enemy_mobility += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Bastion") {
                            enemy_dps += 1;
                            enemy_hitscan += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Hanzo") {
                            enemy_dps += 1;
                            enemy_projectiles += 1;
                        }
                        else if (hero == "Junkrat") {
                            enemy_dps += 1;
                            enemy_projectiles += 1;
                        }
                        else if (hero == "Mei") {
                            enemy_dps += 1;
                            enemy_beam += 1;
                            enemy_projectiles += 1;
                            enemy_block += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Torbjorn") {
                            enemy_dps += 1;
                            enemy_builder += 1;
                            enemy_projectiles += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Widowmaker") {
                            enemy_dps += 1;
                            enemy_hitscan += 1;
                            enemy_mobility += 1;
                        }
                        else if (hero == "D.Va") {
                            enemy_tanks += 1;
                            enemy_mobility += 1;
                            enemy_block += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Reinhardt") {
                            enemy_tanks += 1;
                            enemy_mobility += 1;
                            enemy_block += 2;
                        }
                        else if (hero == "Roadhog") {
                            enemy_tanks += 1;
                            enemy_projectiles += 1;
                            enemy_sustain += 1;
                            enemy_dps += 1;
                        }
                        else if (hero == "Winston") {
                            enemy_tanks += 1;
                            enemy_beam += 1;
                            enemy_mobility += 1;
                            enemy_block += 1;
                        }
                        else if (hero == "Zarya") {
                            enemy_tanks += 1;
                            enemy_dps += 1;
                            enemy_beam += 1;
                            enemy_block += 1;
                            enemy_projectiles += 1;
                        }
                        else if (hero == "Ana") {
                            enemy_support += 1;
                            enemy_hitscan += 1;
                            enemy_projectiles += 1;
                            enemy_sustain += 2;
                        }
                        else if (hero == "Lucio") {
                            enemy_support += 1;
                            enemy_mobility += 2;
                            enemy_projectiles += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Mercy") {
                            enemy_support += 1;
                            enemy_mobility += 1;
                            enemy_sustain += 1;
                        }
                        else if (hero == "Symmetra") {
                            enemy_dps += 1;
                            enemy_mobility += 1;
                            enemy_block += 1;
                            enemy_beam += 1;
                        }
                        else if (hero == "Zenyatta") {
                            enemy_support += 1;
                            enemy_dps += 1;
                            enemy_projectiles += 1;
                            enemy_sustain += 1;
                        }

                    }
                });
                if (enemy_dps < 2) $('#lowDPSEnemy').show();
                if (enemy_support < 1) $('#lowSupportEnemy').show();
                if (enemy_tanks < 1) $('#lowTanksEnemy').show();
                if (enemy_block < 2) $('#lowBlockEnemy').show();
                if (enemy_builder > 1) $('#highBuildEnemy').show();
                if (enemy_hitscan < 1) $('#lowHitscanEnemy').show();
                if (enemy_projectiles < 1) $('#lowProjectileEnemy').show();
                if (enemy_sustain < 2) $('#lowSustainEnemy').show();
                if (enemy_mobility < 2) $('#lowMobilityEnemy').show();
                if (enemy_tanks > 3) $('#highTanksEnemy').show();
            }
            else if(team == 'ally') {
                hideAlerts('ally');
                $('.allyTeam option:selected').each(function () {
                    hero = $(this).text();
                    if(hero != '') {
                        //console.log("Inside selections");
                        console.log(hero);
                        console.log('Team: ' + team);
                        if (hero == "Genji") {
                            ally_dps += 1;
                            //console.log('After update dps #:' + ally_dps);
                            ally_projectiles += 1;
                            ally_mobility += 1;
                        }
                        else if (hero == "McCree") {
                            ally_dps += 1;
                            ally_hitscan += 1;
                        }
                        else if (hero == "Pharah") {
                            ally_dps += 1;
                            ally_projectiles += 1;
                            ally_mobility += 1;
                        }
                        else if (hero == "Reaper") {
                            ally_dps += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Soldier76") {
                            ally_dps += 1;
                            ally_hitscan += 1;
                            ally_mobility += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Sombra") {
                            ally_dps += 1;
                            ally_hitscan += 1;
                            ally_mobility += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Tracer") {
                            ally_dps += 1;
                            ally_hitscan += 1;
                            ally_mobility += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Bastion") {
                            ally_dps += 1;
                            ally_hitscan += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Hanzo") {
                            ally_dps += 1;
                            ally_projectiles += 1;
                        }
                        else if (hero == "Junkrat") {
                            ally_dps += 1;
                            ally_projectiles += 1;
                        }
                        else if (hero == "Mei") {
                            ally_dps += 1;
                            ally_beam += 1;
                            ally_projectiles += 1;
                            ally_block += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Torbjorn") {
                            ally_dps += 1;
                            ally_builder += 1;
                            ally_projectiles += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Widowmaker") {
                            ally_dps += 1;
                            ally_hitscan += 1;
                            ally_mobility += 1;
                        }
                        else if (hero == "D.Va") {
                            ally_tanks += 1;
                            ally_mobility += 1;
                            ally_block += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Reinhardt") {
                            ally_tanks += 1;
                            ally_mobility += 1;
                            ally_block += 2;
                        }
                        else if (hero == "Roadhog") {
                            ally_tanks += 1;
                            ally_projectiles += 1;
                            ally_sustain += 1;
                            ally_dps += 1;
                        }
                        else if (hero == "Winston") {
                            ally_tanks += 1;
                            ally_beam += 1;
                            ally_mobility += 1;
                            ally_block += 1;
                        }
                        else if (hero == "Zarya") {
                            ally_tanks += 1;
                            ally_dps += 1;
                            ally_beam += 1;
                            ally_block += 1;
                            ally_projectiles += 1;
                        }
                        else if (hero == "Ana") {
                            ally_support += 1;
                            ally_hitscan += 1;
                            ally_projectiles += 1;
                            ally_sustain += 2;
                        }
                        else if (hero == "Lucio") {
                            ally_support += 1;
                            ally_mobility += 2;
                            ally_projectiles += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Mercy") {
                            ally_support += 1;
                            ally_mobility += 1;
                            ally_sustain += 1;
                        }
                        else if (hero == "Symmetra") {
                            ally_dps += 1;
                            ally_mobility += 1;
                            ally_block += 1;
                            ally_beam += 1;
                            ally_builder += 1;
                        }
                        else if (hero == "Zenyatta") {
                            ally_support += 1;
                            ally_dps += 1;
                            ally_projectiles += 1;
                            ally_sustain += 1;
                        }
                    }
                });

                if (ally_dps < 2) $('#lowDPS').show();
                if (ally_support < 1) $('#lowSupport').show();
                if (ally_tanks < 1) $('#lowTanks').show();
                if (ally_block < 2) $('#lowBlock').show();
                if (ally_builder > 1) $('#highBuild').show();
                if (ally_hitscan < 1) $('#lowHitscan').show();
                if (ally_projectiles < 1) $('#lowProjectile').show();
                if (ally_sustain < 2) $('#lowSustain').show();
                if (ally_mobility < 2) $('#lowMobility').show();
                if (ally_tanks > 3) $('#highTanks').show();
            }
        };


        $counterService.getCounters().then(function(res) {
            $scope.counters = res.data;
        });

        $scope.displayCounters = function(clickedHero){
            reset();
            $('.' + clickedHero).css("background-color", BLUE);
            for(var i = 0; i < $scope.counters.length; i++) {
                var hero = $scope.counters[i];
                if (hero.name == clickedHero) {
                    for (var j = 0; j < hero.counters.length; j++) {
                        $('.' + hero.counters[j]).css("background-color", GREEN);
                    }
                    for (var k = 0; k < hero.counteredBy.length; k++){
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

        function hideAlerts(team) {
            if (team == "ally") {
                $('#lowDPS').hide();
                $('#lowSupport').hide();
                $('#lowTanks').hide();
                $('#lowHitscan').hide();
                $('#lowBlock').hide();
                $('#highBuild').hide();
                $('#lowProjectile').hide();
                $('#lowSustain').hide();
                $('#lowMobility').hide();
                $('#highTanks').hide();
            }
            else if (team == "enemy") {
                $('#lowDPSEnemy').hide();
                $('#lowSupportEnemy').hide();
                $('#lowTanksEnemy').hide();
                $('#lowHitscanEnemy').hide();
                $('#lowBlockEnemy').hide();
                $('#highBuildEnemy').hide();
                $('#lowProjectileEnemy').hide();
                $('#lowSustainEnemy').hide();
                $('#lowMobilityEnemy').hide();
                $('#highTanksEnemy').hide();
            }
        }

        //refactor these two use angular ng-click directive
        /*$(".enemyTeam option").click(function () {
         //if($(this).val() != "-Select-") alert("You clicked " + $(this).val() + " enemy.");
         checkComp("enemy");
         });

         $(".allyTeam option").click(function () {
         //if($(this).val() != "-Select-") alert("You clicked " + $(this).val() + " ally.");
         checkComp("ally");
         }); */

        /*function checkComp(team) {
            if (team == "enemy") {
                hideAlerts(team);
                $('.enemyTeam option:selected').each(function () {
                    var pick = $(this).val();
                    if (pick != "-Select-") {
                        //console.log(pick);
/*                        if (pick == "Genji") {
                            dps += 1;
                            projectiles += 1;
                            mobility += 1;
                        }
                        else if (pick == "McCree") {
                            dps += 1;
                            hitscan += 1;
                        }
                        else if (pick == "Pharah") {
                            dps += 1;
                            projectiles += 1;
                            mobility += 1;
                        }
                        else if (pick == "Reaper") {
                            dps += 1;
                            sustain += 1;
                        }
                        else if (pick == "Soldier76") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Sombra") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Tracer") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Bastion") {
                            dps += 1;
                            hitscan += 1;
                            sustain += 1;
                        }
                        else if (pick == "Hanzo") {
                            dps += 1;
                            projectiles += 1;
                        }
                        else if (pick == "Junkrat") {
                            dps += 1;
                            projectiles += 1;
                        }
                        else if (pick == "Mei") {
                            dps += 1;
                            beam += 1;
                            projectiles += 1;
                            block += 1;
                            sustain += 1;
                        }
                        else if (pick == "Torbjorn") {
                            dps += 1;
                            builder += 1;
                            projectiles += 1;
                            sustain += 1;
                        }
                        else if (pick == "Widowmaker") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                        }
                        else if (pick == "D.Va") {
                            tanks += 1;
                            mobility += 1;
                            block += 1;
                            sustain += 1;
                        }
                        else if (pick == "Reinhardt") {
                            tanks += 1;
                            mobility += 1;
                            block += 2;
                        }
                        else if (pick == "Roadhog") {
                            tanks += 1;
                            projectiles += 1;
                            sustain += 1;
                            dps += 1;
                        }
                        else if (pick == "Winston") {
                            tanks += 1;
                            beam += 1;
                            mobility += 1;
                            block += 1;
                        }
                        else if (pick == "Zarya") {
                            tanks += 1;
                            dps += 1;
                            beam += 1;
                            block += 1;
                            projectiles += 1;
                        }
                        else if (pick == "Ana") {
                            support += 1;
                            hitscan += 1;
                            projectiles += 1;
                            sustain += 2;
                        }
                        else if (pick == "Lucio") {
                            support += 1;
                            mobility += 2;
                            projectiles += 1;
                            sustain += 1;
                        }
                        else if (pick == "Mercy") {
                            support += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Symmetra") {
                            dps += 1;
                            mobility += 1;
                            block += 1;
                            beam += 1;
                        }
                        else if (pick == "Zenyatta") {
                            support += 1;
                            dps += 1;
                            projectiles += 1;
                            sustain += 1;
                        }
                    }
                });
                //now check with bootstrap messages
                if (dps < 2) $('#lowDPSEnemy').show();
                if (support < 1) $('#lowSupportEnemy').show();
                if (tanks < 1) $('#lowTanksEnemy').show();
                if (block < 2) $('#lowBlockEnemy').show();
                if (builder > 1) $('#highBuildEnemy').show();
                if (hitscan < 1) $('#lowHitscanEnemy').show();
                if (projectiles < 1) $('#lowProjectileEnemy').show();
                if (sustain < 2) $('#lowSustainEnemy').show();
                if (mobility < 2) $('#lowMobilityEnemy').show();
                if (tanks > 3) $('#highTanksEnemy').show();
            }
            else if (team == "ally") {
                hideAlerts(team);
                $('.allyTeam option:selected').each(function () {
                    var pick = $(this).val();
                    if (pick != "-Select-") {
                        //console.log(pick);
                        if (pick == "Genji") {
                            dps += 1;
                            projectiles += 1;
                            mobility += 1;
                        }
                        else if (pick == "McCree") {
                            dps += 1;
                            hitscan += 1;
                        }
                        else if (pick == "Pharah") {
                            dps += 1;
                            projectiles += 1;
                            mobility += 1;
                        }
                        else if (pick == "Reaper") {
                            dps += 1;
                            sustain += 1;
                        }
                        else if (pick == "Soldier76") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Sombra") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Tracer") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Bastion") {
                            dps += 1;
                            hitscan += 1;
                            sustain += 1;
                        }
                        else if (pick == "Hanzo") {
                            dps += 1;
                            projectiles += 1;
                        }
                        else if (pick == "Junkrat") {
                            dps += 1;
                            projectiles += 1;
                        }
                        else if (pick == "Mei") {
                            dps += 1;
                            beam += 1;
                            projectiles += 1;
                            block += 1;
                            sustain += 1;
                        }
                        else if (pick == "Torbjorn") {
                            dps += 1;
                            builder += 1;
                            projectiles += 1;
                            sustain += 1;
                        }
                        else if (pick == "Widowmaker") {
                            dps += 1;
                            hitscan += 1;
                            mobility += 1;
                        }
                        else if (pick == "D.Va") {
                            tanks += 1;
                            mobility += 1;
                            block += 1;
                            sustain += 1;
                        }
                        else if (pick == "Reinhardt") {
                            tanks += 1;
                            mobility += 1;
                            block += 2;
                        }
                        else if (pick == "Roadhog") {
                            tanks += 1;
                            dps += 1;
                            projectiles += 1;
                            sustain += 1;
                        }
                        else if (pick == "Winston") {
                            tanks += 1;
                            beam += 1;
                            mobility += 1;
                            block += 1;
                        }
                        else if (pick == "Zarya") {
                            tanks += 1;
                            dps += 1;
                            beam += 1;
                            block += 1;
                            projectiles += 1;
                        }
                        else if (pick == "Ana") {
                            support += 1;
                            hitscan += 1;
                            projectiles += 1;
                            sustain += 2;
                        }
                        else if (pick == "Lucio") {
                            support += 1;
                            mobility += 2;
                            projectiles += 1;
                            sustain += 1;
                        }
                        else if (pick == "Mercy") {
                            support += 1;
                            mobility += 1;
                            sustain += 1;
                        }
                        else if (pick == "Symmetra") {
                            dps += 1;
                            mobility += 1;
                            block += 1;
                            beam += 1;
                        }
                        else if (pick == "Zenyatta") {
                            support += 1;
                            dps += 1;
                            projectiles += 1;
                            sustain += 1;
                        }
                    }
                });
                //now check with bootstrap messages
                if (dps < 2) $('#lowDPS').show();
                if (support < 1) $('#lowSupport').show();
                if (tanks < 1) $('#lowTanks').show();
                if (block < 2) $('#lowBlock').show();
                if (builder > 1) $('#highBuild').show();
                if (hitscan < 1) $('#lowHitscan').show();
                if (projectiles < 1) $('#lowProjectile').show();
                if (sustain < 2) $('#lowSustain').show();
                if (mobility < 2) $('#lowMobility').show();
                if (tanks > 3) $('#highTanks').show();
            }
        } */
    }]);