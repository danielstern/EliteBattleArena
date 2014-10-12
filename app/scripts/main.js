angular.module("EBADemo", ['EliteBattleArena'])

.run(function(Game, conditions, $rootScope,Actor) {

    var game = new Game();

    game.addActor(new Actor({
    	name:"Friendus Lovemire",
    	side:"good"
    }));
    game.addActor(new Actor({
    	name:"Malphant Drowmuir",
    	side:"evil"
    }));

    $rootScope.info = game.start();

})
