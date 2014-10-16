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
})
.directive("avatarDisplay",function(){
    return {
        scope: {
            actor:"=",
        },
        templateUrl: "partial/avatar-display.html",
        restrict:"AE",
    }
})