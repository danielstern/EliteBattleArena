angular.module("EliteBattleArena.Battle")
.directive("battleHeroList",function(){
    return {
        templateUrl: "modules/Battle/battle-display/battle-hero-list/battle-hero-list.html",
        restrict:"AE",
        scope: {
        	actors:"=",
        	battle:"=",
        	alignment:"=",
        }
    }
})
