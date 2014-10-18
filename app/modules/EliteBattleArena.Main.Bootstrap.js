angular.module("Game.EliteBattleArena", ['EliteBattleArena', 'EliteBattleArena.Scenario', 'EliteBattleArena.Sounds', 'ui.router', 'ngAudio'])
    .run(function($rootScope, Game, Actor, armor, weapons, enemiesMap) {
        var game = localStorage['game'] ? angular.fromJson(localStorage['game']) : new Game();
        console.log("game?", game);
        $rootScope.game = game;


        $rootScope.$watch("game", function() {
            console.log("updating game");
            if (game.deleted) {
                game = new Game();
                initGame(game);
            }
            localStorage['game'] = angular.toJson(game);
            // console.log("Game json?")
        }, true);
        var TEST_MODE = true;

        function initGame(game) {


            var hero = new Actor({
                name: "Friendus Fortunato",
                side: "good",
                body: "hero",
                speed: 6,
                defense: 2
            });

            if (TEST_MODE) {
                game.inventory.push(armor.revitalizingPlate);
                game.inventory.push(weapons.levantineSword);
                game.maxDungeonLevel = 10;
            }

            game.party.push(hero);
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

            game.gold = 100;
        }

        initGame(game);

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
