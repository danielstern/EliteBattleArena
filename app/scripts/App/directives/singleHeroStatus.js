angular.module("EliteBattleArena.App")
.directive("singleHeroStatus",function(){
    return {
        scope: {
            actor:"=",
            target:"=",
        },
        templateUrl: "partial/single-hero-status.html",
        restrict:"AE",
    }
})