angular.module("EliteBattleArena.Item")
.directive("itemView",function(){
    return {
        templateUrl: "partial/itemView.html",
        scope: {
        	item: "="
        },
        restrict:"AE",
    }
})