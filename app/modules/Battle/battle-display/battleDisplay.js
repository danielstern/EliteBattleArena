angular.module("EliteBattleArena.Battle")
.directive("battleDisplay",function(){
    return {
        scope: {
            battle:"=",
            treasures:"=",
        },
        templateUrl: "partial/battle-display.html",
        restrict:"AE",
    }
})


