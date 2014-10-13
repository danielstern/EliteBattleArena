angular.module("EliteBattleArena.App")
.directive("heroBattleDisplay",function(){
    return {
        scope: {
            alignment:"=",
            actors:"=",
            battle:'='
        },
        templateUrl: "partial/hero-battle.html",
        restrict:"AE",
    }
});