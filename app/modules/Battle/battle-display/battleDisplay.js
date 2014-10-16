angular.module("EliteBattleArena.Battle")
.directive("battleDisplay",function(){
    return {
        scope: {
            battle:"=",
            treasures:"=",
        },
        templateUrl: "modules/Battle/battle-display/battle-display.html",
        restrict:"AE",
    }
})


