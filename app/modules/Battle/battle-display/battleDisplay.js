angular.module("EliteBattleArena.Battle")
.directive("battleDisplay",function(){
    return {
        scope: {
            battle:"=",
            treasures:"=",
        },
        link:function(){
        	console.log("battle display");
        },
        templateUrl: "modules/Battle/battle-display/battle-display.html",
        restrict:"AE",
    }
})


