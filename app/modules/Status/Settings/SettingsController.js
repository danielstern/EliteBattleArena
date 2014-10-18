angular.module("EliteBattleArena.Status")

.controller("SettingsController", function($scope) {
	$scope.restartGame = function(){
		var restart = window.confirm("Reset all progress?");
		if (restart) {
			$scope.game.deleted = true;
		}
	}
    
})
