angular.module("EliteBattleArena.App")
.directive("avatarDisplay",function(){
    return {
        scope: {
            actor:"=",
        },
        templateUrl: "partial/avatar-display.html",
        restrict:"AE",
    }
})