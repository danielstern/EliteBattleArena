angular.module("EliteBattleArena.Actor")
.directive("avatarDisplay",function(){
    return {
        scope: {
            actor:"=",
        },
        templateUrl: "modules/Actor/actor-image-display.html",
        restrict:"AE",
    }
})