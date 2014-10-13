angular.module("Game.EliteBattleArena", ['EliteBattleArena','ui.router'])
.run(function($rootScope,Game){
    $rootScope.game = new Game();
})
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name:"main",
        url:"/main",
        templateUrl:'partial/main.html',
    })
    .state({
        name:"main.instructions",
        url:"^/instructions",
        views: {
            game: {
                templateUrl:"partial/instructions.html"
                
            }
        }

    })
    .state({
        name:"main.simulator",
        url:"^/simulator",
        views: {
            game: {
                templateUrl:"partial/simulator.html",
                controller:function($scope,Simulation,Actor){
                    var game = new Simulation();

                    game.addActor(new Actor({
                        name:"Malphant Drowmuir",
                        side:"evil",
                        body:"villain"
                    }));

                    $scope.info = game.start();
                    
                    $scope.go = function() {
                        $scope.info = game.start();
                    }
                }
            }
        }

    })

    .state({
        name:"main.dungeon",
        url:"^/dungeon",
        views: {
            game: {
                templateUrl:"partial/dungeon.html",
            }
        }
    })

    .state({
        name:"main.dungeon.floor",
        url:"^/dungeon/:floor",
        views: {
            floor: {
                templateUrl:"partial/floor.html",
                controller:function($scope,Simulation,Actor) {
                    var battle = new Simulation();

                    $scope.game.party.forEach(function(hero){
                        battle.addActor(hero);
                    })

                    battle.addActor(new Actor({
                        name:"Common Troll",
                        side:"evil",
                        body:"villain",
                        health: 25
                    }));

                    $scope.info = battle.start();
                    
                    $scope.go = function() {
                        $scope.info = battle.start();
                    }
                }
            }
        }
    })

    .state({
        name:"main.status",
        url:"^/status",
        views: {
            game: {
                templateUrl:"partial/status.html",
                controller: function($scope){
                    $scope.actor = $scope.game.party[0];
                }
            }
        }

    })
    
    $stateProvider.state({
        name:"splash",
        url:"/splash",
        templateUrl:'partial/splash.html'
    });
     $urlRouterProvider.when('', '/instructions');
})

.controller("EBADemoController",function($scope,Actor){
   
})
.directive("heroBattleDisplay",function(){
    return {
        scope: {
            alignment:"=",
            actors:"=",
        },
        templateUrl: "partial/hero-battle.html",
        restrict:"AE",
    }
})
.directive("singleHeroStatus",function(){
    return {
        scope: {
            actor:"=",
        },
        templateUrl: "partial/single-hero-status.html",
        restrict:"AE",
    }
})
.directive("battleSimulationDisplay",function(){
    return {
        scope: {
            simulation:"=",
        },
        templateUrl: "partial/battle-simulation-display.html",
        restrict:"AE",
        controller: function($scope) {
            $scope.simulation.currentTurn = 1;
        }
    }
})

