angular.module("EliteBattleArena.App")

.controller("FloorController", function($state, $scope) {
    $state.go('main.dungeon.floor', {
        floor: $scope.game.currentDungeonLevel
    });
});
