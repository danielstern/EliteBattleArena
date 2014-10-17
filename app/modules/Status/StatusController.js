angular.module("EliteBattleArena.Status")

.controller("StatusController", function($state, $scope,musicSounds) {
    $scope.actor = $scope.game.party[0];
    $scope.actor.health = $scope.actor.maxHealth;
    musicSounds.menu();
    // $state.go('main.status.character');
});
