angular.module("Game.EliteBattleArena", ['EliteBattleArena', 'ui.router'])
    .run(function($rootScope, Game,Actor) {
        $rootScope.game = new Game();

        var hero = new Actor({
            name: "Friendus Fortunato",
            side: "good",
            body: "hero",
        })

        $rootScope.game.party.push(hero);

        hero.equip.body = {
        	name: "Shoddy Armor",
        	defense: 3
        };

        hero.equip.weapon = {
        	weapon: "Puny Spear",
        	attack: 4
        }

        $rootScope.game.gold = 420;

    });
