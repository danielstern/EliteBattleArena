angular.module("EliteBattleArena.App")

.controller("InventoryController", function($scope) {
    $scope.equip = function(item) {
        console.log("Equip!", item, $scope.game.party);
        $scope.game.party[0].equip[item.location] = item;
    }

})
