angular.module("EliteBattleArena.App")
.controller("DungeonController",function($scope){
	$scope.allFloors = [];
	// console.log("Game?",$scope.game);
	$scope.allFloors.length = $scope.game.totalDungeonLevels;
})
.controller("FloorController", function($state, $scope) {
    // $state.go('main.dungeon.floor', {
    //     floor: $scope.game.currentDungeonLevel
    // });
});
