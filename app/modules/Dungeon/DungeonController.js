angular.module("EliteBattleArena.App")
.controller("DungeonController",function($scope){
	$scope.allFloors = [];
	$scope.allFloors.length = $scope.game.totalDungeonLevels;
})
