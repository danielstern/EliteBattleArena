/* global describe, it */

(function() {
    'use strict';
    var testCount = 100;

    angular.module("tests", ['treasureServiceTest', 'foesTest']);

    // angular.module('EliteBattleArena.Test',['EliteBattleArena']);

    describe('the treasure service', function() {
        angular.module("treasureServiceTest", ['EliteBattleArena.Treasure']);


        describe('how the treasure service returns items', function() {
            angular.module("treasureServiceTest")
                .service('treasureTester', function(treasureService) {
                    this.testTreasureFor = function(group, level, iterations) {

                        var totalLoot = [];



                        var goldCount = 0;
                        var totalGold = 0;
                        var weaponsCount = 0;
                        var armorCount = 0;

                        var i = iterations;

                        while (i--) {
                            totalLoot.push(treasureService.getTreasures(group, level));
                        };

                        totalLoot.forEach(function(loot) {
                            if (loot) {
                                if (loot.gold) {
                                    goldCount++;
                                    totalGold += loot.value;
                                };

                                if (loot.location == 'weapon') {
                                    weaponsCount++;
                                }

                                if (loot.location == 'body' || loot.location == 'shield' || loot.location == 'head') {
                                    armorCount++;
                                }
                            }
                        });

                        console.log("Group?", group);
                        console.log("Total Armor:" + armorCount);
                        console.log("Total Weapons" + weaponsCount);
                        console.log("Total Gold" + totalGold);



                        return {
                            loot: totalLoot,
                            gold: totalGold,
                            goldCount: goldCount,
                            armorCount: armorCount,
                            weaponsCount: armorCount
                        }

                    }
                });

            it('should return gold and a variety of items in reasonable propertion for various enemies', function() {

                angular.module("treasureServiceTest")
                    .run(function(treasureTester) {

                        [treasureTester.testTreasureFor('weak-enemy', 1, testCount),
                            treasureTester.testTreasureFor('medium-enemy', 4, testCount),
                            treasureTester.testTreasureFor('strong-enemy', 7, testCount)
                        ]
                        .forEach(function(report) {

                            // console.log("Testing enemies for treasure...");
                            if (report.weaponsCount + report.armorCount < testCount / 5) {
                                console.warn("Not enough treasure!");
                            }

                        })


                    });
                // throw new Error();
                return true;
            });

            it('should return strong items', function() {

                angular.module("treasureServiceTest")
                    .run(function(treasureTester) {


                    });
                // throw new Error();
                return true;
            });
        });
    });

    describe("how the foes scale", function() {
        console.log("Testing foes");

        angular.module("foesTest", ['EliteBattleArena.Scenario', 'EliteBattleArena.Battle', 'EliteBattleArena.AI']);

        angular.module("foesTest")
            .service("battleSimulator", function(battleTurn, conditions, characterFilters, Battle) {
                this.simulateBattle = function(party, foes) {
                    // console.log("Simulating battle");
                    this.winConditions = [conditions.allVillainsDead];
                    this.loseConditions = [conditions.allHeroesDead];
                    var battle = new Battle();
                    battle.actors.push(party[0]);
                    foes.forEach(function(foe) {
                        battle.actors.push(foe);
                    })


                    var count = 1000;
                    while (battle.victory !== true && battle.victory !== false) {
                        battleTurn(battle);
                    }

                    // console.log("Batle outcome?", battle.victory);

                    return battle;
                }

            });

        it("should get a bit tougher each level", function() {
            angular.module("foesTest")
                .run(function(battleSimulator, enemiesMap, Actor) {
                    var level = 0;
                    while (level++ < 9) {

                        var i = testCount;
                        var totalResults = [];

                        var hero = {
                            name: "Friendus Fortunato",
                            side: "good",
                            body: "hero",
                            speed: 6,
                            defense: 2
                        };

                        // var party = [];

                        while (i--) {
                            totalResults.push(battleSimulator.simulateBattle([new Actor(hero)], enemiesMap.getEnemiesForLevel(level)));
                        }; 

                        var totalVictories = 0;
                        var totalDefeats = 0;

                        totalResults.forEach(function(result){
                            if (result.victory) {
                                totalVictories++;
                            } else {
                                totalDefeats++;
                            }
                        });

                        console.log("Totals?");
                        console.log("Victories: ", totalVictories);
                        console.log("Defeats: ", totalDefeats);
                    }

                })
        })

    })
})();
