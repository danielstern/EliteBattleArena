angular.module("EliteBattleArena.Status")

.controller("StatusController", function($state, $scope) {
    $scope.actor = $scope.game.party[0];
    $scope.actor.health = $scope.actor.maxHealth;
    // $state.go('main.status.character');
});
