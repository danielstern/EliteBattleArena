angular.module("Game.EliteBattleArena", ['EliteBattleArena','EliteBattleArena.Scenario', 'ui.router'])
    .run(function($rootScope, Game, Actor, armor, weapons) {
        var game = new Game();
        $rootScope.game = game;

        var hero = new Actor({
            name: "Friendus Fortunato",
            side: "good",
            body: "hero",
        });

        game.storeItems = [
            armor.helmetOfStrength,
            weapons.ironDagger
        ]

        game.inventory = [armor.commonSkullCap];

        game.party.push(hero);

        hero.equip.body = armor.shoddyArmor;
        hero.equip.weapon = weapons.punySpear;

        game.gold = 420;

    })


