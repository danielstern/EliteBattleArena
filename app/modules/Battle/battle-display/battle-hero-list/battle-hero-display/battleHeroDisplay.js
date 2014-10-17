angular.module("EliteBattleArena.Battle")
.directive("battleHeroDisplay",function(){
    return {
        templateUrl: "modules/Battle/battle-display/battle-hero-list/battle-hero-display/battle-hero-display.html",
        restrict:"AE",
        link:function(){
        	console.log("hero battle display")
        }
    }
})
