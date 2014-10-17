angular.module("EliteBattleArena.Store")

.controller("StoreController", function($scope) {
    $scope.buy = function(item) {
        $scope.game.gold -= item.cost;
        $scope.game.inventory.push(angular.copy(item));
        item.bought = true;
    }
})
