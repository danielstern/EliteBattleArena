angular.module("EliteBattleArena.Store")

.controller("StoreController", function($scope, Item) {
    $scope.buy = function(item) {
        $scope.game.gold -= item.cost;
        $scope.game.inventory.push(new Item(item));
        item.alreadySold = true;
    }
})
