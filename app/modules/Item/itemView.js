angular.module("EliteBattleArena.App")
.directive("itemView",function(){
    return {
        templateUrl: "partial/itemView.html",
        scope: {
        	item: "="
        },
        restrict:"AE",
    }
})