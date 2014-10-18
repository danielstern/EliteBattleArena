angular.module("EliteBattleArena.Store")

.controller("StoreController", function($scope, Item) {
    $scope.buy = function(item) {
    		var store = $scope.game.store;
        $scope.game.gold -= item.cost;
        var inventory = $scope.game.inventory;
        inventory.push(item);
        $scope.game.store.splice($scope.game.store.indexOf(item),1);
    }
})
