angular.module("EliteBattleArena.Battle")
.directive("treasuresDisplay",function(){
    return {
        scope: {
            treasures:"=",
        },
        templateUrl: "modules/Battle/treasures-display/treasures-display.html",
        restrict:"AE",
    }
})