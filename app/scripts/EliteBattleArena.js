angular.module("EliteBattleArena", ['EliteBattleArena.AI', 'EliteBattleArena.Actor'])
    .factory("Game", function(Actor) {
        return function() {
            this.party = [
                new Actor({
                    name: "Friendus Fortunato",
                    side: "good",
                    body: "hero"
                })
            ];

            this.inventory = [];
            this.gold = 420;
            this.currentDungeonLevel = 1;
            this.maxDungeonLevel = 1;
        }
    })
    .factory("Simulation", function() {
        return function() {

            var game = {
                actors: [],
                currentTurn: 0,
                maxTurns: 1000
            };

            this.addActor = function(actor) {
                game.actors.push(actor);
            }

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
                var battleLog = [];
                game.currentTurn = 0;
                game.actors.forEach(function(actor) {
                    actor.health = actor.maxHealth;
                })
                while (game.currentTurn < game.maxTurns) {

                    // START OF TURN PHASE
                    game.currentTurn++;

                    var log = {
                        turn: game.currentTurn,
                        actions: [],
                        narrative: []
                    }

                    // AI PHASE
                    var actions = game.actors.map(function(actor) {
                        if (actor.health <= 0) return;
                        return actor.act(game, actor);
                    })

                    log.actions = actions;

                    // ACTION PHASE
                    actions.forEach(function(action) {
                        if (action.action === 'attack') {
                            action.actor.defending = false;
                            action.target.health -= action.target.defending ? Math.floor(action.actor.attack / 2) : action.actor.attack;
                            log.narrative.push(action.actor.name + " attacked " + action.target.name + " for " + action.actor.attack + " damage.");
                            action.actor.animation = "attacking";
                        }

                        if (action.action === 'nothing' || undefined) {
                            log.narrative.push(action.actor.name + " did nothing.");
                            action.actor.animation = "nothing";
                        }

                        if (action.action === 'heal' || undefined) {
                            action.actor.defending = false;
                            action.target.health += 5;
                            log.narrative.push(action.actor.name + " healed " + action.target.name + " for " + action.actor.attack + " damage.");
                        }

                        if (action.action === 'defend') {
                            action.target.defending = true;
                            log.narrative.push(action.actor.name + " is defending " + action.target.name + ".");
                        }

                    })

                    // END OF TURN PHASE
                    log.game = angular.copy(game);
                    battleLog.push(log);

                    // WIN CONDITION PHASE
                    var losing = this.loseConditions.some(function(condition) {
                        return condition(game);
                    });

                    var winning = this.winConditions.some(function(condition) {
                        return condition(game);
                    });

                    if (losing) {
                        log.narrative.push("The forces of evil have overwhelmed us!");
                        console.warn("You lost!", game);
                        break;
                    }

                    if (winning) {
                        log.narrative.push("The forces of good have prevailed!");
                        console.info("You win!", game);
                        break;
                    }
                }

                return battleLog;
            }
        }
    });
