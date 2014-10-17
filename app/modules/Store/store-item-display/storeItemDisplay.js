angular.module("EliteBattleArena.Store")
.directive("storeItemDisplay",function(){
    return {
        scope: {
            item:"=",
            buy:"="
        },
        templateUrl: "modules/Store/store-item-display/store-item-display.html",
        restrict:"AE",
    }
})