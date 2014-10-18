angular.module("EliteBattleArena.Status")

.controller("StatusController", function($state, $scope,musicSounds) {
    $scope.actor = $scope.game.party[0];
    $scope.actor.health = $scope.actor.maxHealth;
    musicSounds.menu();

    $scope.unequip = function(item) {
        $scope.game.party[0].unequipItem(item);
        $scope.game.inventory.push(item);
    }
});
