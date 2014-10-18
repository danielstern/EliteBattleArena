angular.module("Game.EliteBattleArena", ['EliteBattleArena', 'EliteBattleArena.Scenario', 'EliteBattleArena.Sounds', 'ui.router', 'ngAudio'])
    .run(function($rootScope, Game, Actor, armor, weapons, enemiesMap) {
        var game;
        if (localStorage['game']) {
            game = angular.fromJson(localStorage['game']);
            initGame(game);
        } else {
            game = new Game();
            initGame(game);
        }
        console.log("game?", game);
        $rootScope.game = game;


        $rootScope.$watch("game", function() {
            console.log("updating game");
            if (game.deleted) {
                game = new Game();
                initGame(game);
            }
            localStorage['game'] = JSON.stringify(game);
            // console.log("Game json?")
        }, true);
        var TEST_MODE = false;

        function initGame(game) {

                if (game.party[0]) {
                    var hero = game.party[0];

                    var newActor = new Actor();
                    for (key in newActor) {
                        if (_.isFunction(newActor[key])) {
                           hero[key] = newActor[key].bind(hero);
                        }
                    }
                    hero.equipItem = newActor.equipItem.bind(hero);

                } else {


                    var hero = new Actor({
                        name: "Friendus Fortunato",
                        side: "good",
                        body: "hero",
                        speed: 6,
                        defense: 2
                    });
                    game.party.push(hero);

                }
                if (TEST_MODE) {
                    game.inventory.push(armor.revitalizingPlate);
                    game.inventory.push(weapons.levantineSword);
                    game.maxDungeonLevel = 10;
                }

                // game.totalDungeonLevels = Object.keys(enemiesMap).length;
                game.totalDungeonLevels = 9;

                game.store = {
                    weapons: {

                    },
                    armor: {

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

                game.gold = game.gold || 100;
                console.log("initinggame;")
            }
            // initGame(game);

    })
    .directive("button", function(interfaceSounds) {
        return {
            restrict: "E",
            link: function(scope, element) {
                element.click(function() {
                    interfaceSounds.click();
                })
            }
        }
    })
