angular.module("EliteBattleArena.Item")
.directive("itemView",function(){
    return {
        templateUrl: "modules/Item/item-view/item-view.html",
        scope: {
        	item: "=",
        	compact:"="
        },
        restrict:"AE",
    }
});