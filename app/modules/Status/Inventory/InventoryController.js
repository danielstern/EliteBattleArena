angular.module("EliteBattleArena.Inventory")

.controller("InventoryController", function($scope) {
    $scope.equip = function(item) {
        console.log("Equip!", item, $scope.game.party);
        $scope.game.party[0].equipItem(item);
    }

    $scope.sell = function(item) {
        console.log("Sell", item, $scope.game.party);
        $scope.game.gold += item.cost / 2;
        item.deleted = true;
    }


})
