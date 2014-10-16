angular.module("EliteBattleArena.App")
.directive("battleDisplay",function(){
    return {
        scope: {
            battle:"=",
            treasures:"=",
        },
        templateUrl: "partial/battle-display.html",
        restrict:"AE",
        controller: function($scope) {

        }
    }
})


