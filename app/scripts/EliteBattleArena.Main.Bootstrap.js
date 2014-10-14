angular.module("Game.EliteBattleArena", ['EliteBattleArena','EliteBattleArena.Scenario', 'ui.router'])
    .run(function($rootScope, Game, Actor, armor, weapons) {
        var game = new Game();
        $rootScope.game = game;

        var hero = new Actor({
            name: "Friendus Fortunato",
            side: "good",
            body: "hero",
        });
        game.party.push(hero);

        game.store = {};

        game.store.weapons = weapons;
        game.store.armor = armor;


        game.gold = 420;

    })


