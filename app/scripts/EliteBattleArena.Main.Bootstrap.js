angular.module("Game.EliteBattleArena", ['EliteBattleArena', 'ui.router'])
    .run(function($rootScope, Game,Actor) {
        $rootScope.game = new Game();

        $rootScope.game.party.push(new Actor({
            name: "Friendus Fortunato",
            side: "good",
            body: "hero",
        }));

        $rootScope.game.gold = 420;

    });
