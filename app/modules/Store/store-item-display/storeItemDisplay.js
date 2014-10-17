angular.module("EliteBattleArena.Store")
.directive("storeItemDisplay",function(){
    return {
        scope: {
            item:"=",
            game:"=",
            buy:"="
        },
        templateUrl: "modules/Store/store-item-display/store-item-display.html",
        restrict:"AE",
    }
})