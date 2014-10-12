angular.module("EBADemo", ['EliteBattleArena'])

.controller("EBADemoController",function($scope,Game,Actor){
    var game = new Game();

    game.addActor(new Actor({
        name:"Friendus Lovemire",
        side:"good"
    }));
    game.addActor(new Actor({
        name:"Malphant Drowmuir",
        side:"evil"
    }));

    $scope.info = game.start();
    $scope.simulation={
        currentTurn:1
    };
})
