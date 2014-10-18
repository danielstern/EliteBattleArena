angular.module("EliteBattleArena.Inventory")

.controller("InventoryController", function($scope) {
    $scope.equip = function(item) {
        $scope.game.party[0].equipItem(item);
        $scope.game.inventory.splice($scope.game.inventory.indexOf(item), 1);
    }

 
    $scope.sell = function(item) {
        $scope.game.gold += item.cost / 2;
        $scope.game.store.push(item);
        $scope.game.inventory.splice($scope.game.inventory.indexOf(item), 1);
    }


})
