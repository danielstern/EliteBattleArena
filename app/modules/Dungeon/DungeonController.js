angular.module("EliteBattleArena.Dungeon")
.controller("DungeonController",function($scope){
	$scope.allFloors = [];
	$scope.allFloors.length = $scope.game.totalDungeonLevels;
})
