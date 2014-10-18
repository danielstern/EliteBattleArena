angular.module("EliteBattleArena.Inventory")

.controller("InventoryController", function($scope) {
    $scope.equip = function(item) {
    	console.log("Hero?",$scope.game.party[0])
        $scope.game.party[0].equipItem(item);
    }

    $scope.sell = function(item) {
        $scope.game.gold += item.cost / 2;
        item.deleted = true;
    }


})
