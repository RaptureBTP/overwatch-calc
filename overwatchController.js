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
            template: '<div class="jumbotron text-center"> <h1>Overwatch Planner</h1> <p>Use this page to plan your team composition and hero counters for your next game!</p> </div>'
        };
    })
    .controller('overwatchController', ['$scope', 'counterService', function($scope, $counterService) {
        const BLUE = "#4286f4";
        const GREEN = "#33e84b";
        const RED = "#ef3232";

        $scope.testVar = true;
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

        $scope.selectionMadeEnemy = false;
        $scope.selectionMadeAlly = false;

        $scope.allHeroes = ['Genji', 'McCree', 'Pharah', 'Reaper', 'Soldier76', 'Sombra', 'Tracer', 'Bastion', 'Hanzo', 'Junkrat', 'Mei', 'Torbjorn', 'Widowmaker', 'D.Va', 'Reinhardt', 'Roadhog', 'Winston', 'Zarya', 'Ana', 'Lucio', 'Mercy', 'Symmetra', 'Zenyatta'];

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

        $scope.heroSelected = function (hero, team) {
            if (team === "enemy") {
                enemyRolesReset();
                $scope.selectionMadeEnemy = true;
                $('.enemyTeam option:selected').each(function () {
                    hero = $(this).text();
                    if (hero !== '') {
                        console.log(hero);
                        console.log('Team: ' + team);
                        if (hero === "Genji") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_mobility += 1;
                        }
                        else if (hero === "McCree") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_hitscan += 1;
                        }
                        else if (hero === "Pharah") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_mobility += 1;
                        }
                        else if (hero === "Reaper") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Soldier76") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_hitscan += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Sombra") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_hitscan += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Tracer") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_hitscan += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Bastion") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_hitscan += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Hanzo") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_projectiles += 1;
                        }
                        else if (hero === "Junkrat") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_projectiles += 1;
                        }
                        else if (hero === "Mei") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_beam += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_block += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Torbjorn") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_builder += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Widowmaker") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_hitscan += 1;
                            $scope.enemy_mobility += 1;
                        }
                        else if (hero === "D.Va") {
                            $scope.enemy_tanks += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_block += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Reinhardt") {
                            $scope.enemy_tanks += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_block += 2;
                        }
                        else if (hero === "Roadhog") {
                            $scope.enemy_tanks += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_sustain += 1;
                            $scope.enemy_dps += 1;
                        }
                        else if (hero === "Winston") {
                            $scope.enemy_tanks += 1;
                            $scope.enemy_beam += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_block += 1;
                        }
                        else if (hero === "Zarya") {
                            $scope.enemy_tanks += 1;
                            $scope.enemy_dps += 1;
                            $scope.enemy_beam += 1;
                            $scope.enemy_block += 1;
                            $scope.enemy_projectiles += 1;
                        }
                        else if (hero === "Ana") {
                            $scope.enemy_support += 1;
                            $scope.enemy_hitscan += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_sustain += 2;
                        }
                        else if (hero === "Lucio") {
                            $scope.enemy_support += 1;
                            $scope.enemy_mobility += 2;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Mercy") {
                            $scope.enemy_support += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_sustain += 1;
                        }
                        else if (hero === "Symmetra") {
                            $scope.enemy_dps += 1;
                            $scope.enemy_mobility += 1;
                            $scope.enemy_block += 1;
                            $scope.enemy_beam += 1;
                        }
                        else if (hero === "Zenyatta") {
                            $scope.enemy_support += 1;
                            $scope.enemy_dps += 1;
                            $scope.enemy_projectiles += 1;
                            $scope.enemy_sustain += 1;
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
                        console.log(hero);
                        console.log('Team: ' + team);
                        if (hero === "Genji") {
                            $scope.ally_dps += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_mobility += 1;
                        }
                        else if (hero === "McCree") {
                            $scope.ally_dps += 1;
                            $scope.ally_hitscan += 1;
                        }
                        else if (hero === "Pharah") {
                            $scope.ally_dps += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_mobility += 1;
                        }
                        else if (hero === "Reaper") {
                            $scope.ally_dps += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Soldier76") {
                            $scope.ally_dps += 1;
                            $scope.ally_hitscan += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Sombra") {
                            $scope.ally_dps += 1;
                            $scope.ally_hitscan += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Tracer") {
                            $scope.ally_dps += 1;
                            $scope.ally_hitscan += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Bastion") {
                            $scope.ally_dps += 1;
                            $scope.ally_hitscan += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Hanzo") {
                            $scope.ally_dps += 1;
                            $scope.ally_projectiles += 1;
                        }
                        else if (hero === "Junkrat") {
                            $scope.ally_dps += 1;
                            $scope.ally_projectiles += 1;
                        }
                        else if (hero === "Mei") {
                            $scope.ally_dps += 1;
                            $scope.ally_beam += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_block += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Torbjorn") {
                            $scope.ally_dps += 1;
                            $scope.ally_builder += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Widowmaker") {
                            $scope.ally_dps += 1;
                            $scope.ally_hitscan += 1;
                            $scope.ally_mobility += 1;
                        }
                        else if (hero === "D.Va") {
                            $scope.ally_tanks += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_block += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Reinhardt") {
                            $scope.ally_tanks += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_block += 2;
                        }
                        else if (hero === "Roadhog") {
                            $scope.ally_tanks += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_sustain += 1;
                            $scope.ally_dps += 1;
                        }
                        else if (hero === "Winston") {
                            $scope.ally_tanks += 1;
                            $scope.ally_beam += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_block += 1;
                        }
                        else if (hero === "Zarya") {
                            $scope.ally_tanks += 1;
                            $scope.ally_dps += 1;
                            $scope.ally_beam += 1;
                            $scope.ally_block += 1;
                            $scope.ally_projectiles += 1;
                        }
                        else if (hero === "Ana") {
                            $scope.ally_support += 1;
                            $scope.ally_hitscan += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_sustain += 2;
                        }
                        else if (hero === "Lucio") {
                            $scope.ally_support += 1;
                            $scope.ally_mobility += 2;
                            $scope.ally_projectiles += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Mercy") {
                            $scope.ally_support += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_sustain += 1;
                        }
                        else if (hero === "Symmetra") {
                            $scope.ally_dps += 1;
                            $scope.ally_mobility += 1;
                            $scope.ally_block += 1;
                            $scope.ally_beam += 1;
                            $scope.ally_builder += 1;
                        }
                        else if (hero === "Zenyatta") {
                            $scope.ally_support += 1;
                            $scope.ally_dps += 1;
                            $scope.ally_projectiles += 1;
                            $scope.ally_sustain += 1;
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

        /*function hideAlerts(team) {
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
        }*/
    }]);