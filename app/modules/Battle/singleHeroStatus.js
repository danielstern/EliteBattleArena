angular.module("EliteBattleArena.App")
.directive("singleHeroStatus",function(){
    return {
        templateUrl: "partial/single-hero-status.html",
        restrict:"AE",
    }
})
.directive("itemView",function(){
    return {
        templateUrl: "partial/itemView.html",
        scope: {
        	item: "="
        },
        restrict:"AE",
    }
})