angular.module("EliteBattleArena.App")
.directive("heroBattleDisplay",function(){
    return {
        scope: {
            alignment:"=",
            actors:"=",
        },
        templateUrl: "partial/hero-battle.html",
        restrict:"AE",
    }
});