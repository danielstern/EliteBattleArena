angular.module("EliteBattleArena.Actor")
.directive("actorImageDisplay",function(){
    return {
        scope: {
            actor:"=",
        },
        templateUrl: "modules/Actor/actor-image-display/actor-image-display.html",
        restrict:"AE",
    }
})