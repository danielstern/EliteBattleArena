angular.module("Game.EliteBattleArena", ['EliteBattleArena','EliteBattleArena.Scenario', 'ui.router'])
    .run(function($rootScope, Game, Actor, armor, weapons,enemiesMap) {
        var game = new Game();
        $rootScope.game = game;

        var hero = new Actor({
            name: "Friendus Fortunato",
            side: "good",
            body: "hero",
        });
        game.party.push(hero);
        game.totalDungeonLevels = Object.keys(enemiesMap).length;

        game.store = {
            weapons:{

            },
            armor:{

            }
        };

        for (var key in weapons) {
            if (weapons[key].canBuy) {
                game.store.weapons[key] = weapons[key];
            }
        }

        for (var key in armor) {
            if (armor[key].canBuy) {
                game.store.armor[key] = armor[key];
            }
        }
        // game.store.armor = armor;


        game.gold = 100;

    })


