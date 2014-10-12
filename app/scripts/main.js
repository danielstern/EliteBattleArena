angular.module("EliteBattleArena", [])
    .value("defaults", {
        ai: {
            conditions: [{
                name: "If an enemy's life is less than 10 percent",
                effect: function(game, self) {
                    var target = game.enemies.find(function(enemy) {
                        if (enemy.health < enemy.maxHealth / 10) {
                            return true;
                        }
                    })

                    return target;
                }
            }, {
                name: "If your life is less than 10 percent",
                effect: function(game, self) {
                    if (self.health < self.maxHealth / 10) {
                        return true;
                    }
                }
            }],
            effects: [{
                name: "do nothing",
                effect: function(target) {
                    console.log("I'm not doing anything!");
                }
            }, {
                name: "attack",
                effect: function(target) {
                    console.log("I'm attacking ", target.name, "!");
                    target.health-=10;
                }
            }]
        }
    })
    .service("helpers", function() {

    })
    .factory("Game", function(defaults) {
        return function() {
            console.log("Creating game");

            var game = {
                teams: [{
                    id: "T01",
                    name: "Benifihim"
                }, {
                    id: "T02",
                    name: "Malfalcar"
                }],

                actors: [{
                    id: "ACT01",
                    name: "Brightus Ra",
                    side: "good",
                    active: true,
                    act: function(game){
                    	var target = game.actors[1];
                      defaults.ai.effects[1].effect(target);
                    },
                    health: 101, // good always prevails
                    stats: {
                    }
                }, {
                    id: "ACT02",
                    name: "Malvolius Blight",
                    active: false,
                    act: function(game){
                    		var target = game.actors[0];
                    	  // defaults.ai.effects[1].effect(target);
                    },
                    side: "evil",
                    health: 100,
                    stats: {
                    }
                }],
                currentTurn: 0,
                maxTurns: 100
            };

            this.winConditions = [function(game) {
                return game.actors.filter(function(actor) {
                    return actor.side === "evil";
                }).every(function(villain) {
                    return villain.health <= 0;
                });
            }];

            this.loseConditions = [function(game) {
                return game.actors.filter(function(actor) {
                    return actor.side === "good";
                }).every(function(hero) {
                    return hero.health <= 0;
                });
            }];


            this.start = function() {
                console.info("Running game...");
                while (game.currentTurn < game.maxTurns) {
                    game.currentTurn++;
                    console.info("Begin turn...", game.currentTurn);

                    console.info("Checking win conditions...");
                    var winning = this.winConditions.some(function(condition) {
                        return condition(game);
                    });

                    game.actors.forEach(function(actor){
                    	actor.act(game);
                    })

                    if (winning) {
                        console.info("You win!");
                        break;
                    }
                }
            }
        }
    });

angular.module("EBADemo", ['EliteBattleArena'])
    .run(function(defaults, Game) {
        var game = new Game();
        console.log("Game?", game);
        game.start();
    })
