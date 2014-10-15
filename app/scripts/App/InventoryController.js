angular.module("EliteBattleArena.App")

.controller("InventoryController", function($scope) {
    $scope.equip = function(item) {
        console.log("Equip!", item, $scope.game.party);
        if ($scope.game.party[0].equip[item.location]) {
            $scope.game.party[0].equip[item.location].equipped = false;
        }
        $scope.game.party[0].equip[item.location] = item;
        item.equipped = true;
    }

    $scope.sell = function(item) {
        console.log("Sell", item, $scope.game.party);
        $scope.game.gold += item.cost / 2;
        item.deleted = true;
    }


})
