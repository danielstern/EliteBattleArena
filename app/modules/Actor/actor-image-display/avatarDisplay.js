angular.module("EliteBattleArena.Actor")
.directive("avatarDisplay",function(){
    return {
        scope: {
            actor:"=",
        },
        templateUrl: "partial/avatar-display.html",
        restrict:"AE",
    }
})