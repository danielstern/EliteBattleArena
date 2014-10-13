angular.module("Game.EliteBattleArena", ['EliteBattleArena','ui.router'])
.run(function($rootScope,Game){
    $rootScope.game = new Game();
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
            target:"=",
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
.directive("battleDisplay",function(){
    return {
        scope: {
            battle:"=",
        },
        templateUrl: "partial/battle-display.html",
        restrict:"AE",
        controller: function($scope) {

        }
    }
})



