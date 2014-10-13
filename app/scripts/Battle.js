angular.module("EliteBattleArena")
    .factory("Battle", function($interval, conditions,characterFilters) {
        return function() {

            this.actors = [];
            this.currentTurn = 0;

            var battle = this;

            this.winConditions = [conditions.allVillainsDead];
            this.loseConditions = [conditions.allHeroesDead];

            var gameClock;
            this.start = function() {
                characterFilters.isGood(battle.actors)[0].controlled = true;
                gameClock = $interval(function() {
                    console.log("Game clock ticking...");
                    battle.currentTurn++;
                    var narrative = [];
                    battle.actors.forEach(function(actor) {
                        if (actor.health <= 0) {
                            actor.animation = "dead";
                            return;
                        }
                        actor.sp += actor.speed;
                        if (actor.sp > 99) {
                            actor.sp = 100;
                            actor.canAct = true;
                        } else {
                            actor.canAct = false;
                        }

                        if (actor.canAct) {
                            var action;

                            if (!actor.controlled) {

                                action = actor.act(battle, actor);

                            } else {
                                if (actor.selectedAction) {
                                    action = actor.selectedAction;
                                    actor.selectedAction = undefined;
                                } else {
                                    action = {
                                    action:"nothing",
                                    actor:"actor"
                                };
                                }
                                
                            }

                            if (action.action === 'attack') {
                                action.actor.defending = false;
                                action.target.health -= action.target.defending ? Math.floor(action.actor.attack / 2) : action.actor.attack;
                                narrative.push(action.actor.name + " attacked " + action.target.name + " for " + action.actor.attack + " damage.");
                                action.actor.animation = "attacking";
                                actor.sp = 0;
                            }

                            if (action.action === 'nothing' || undefined) {
                                narrative.push(action.actor.name + " did nothing.");
                                action.actor.animation = "nothing";
                            }

                            if (action.action === 'heal' || undefined) {
                                action.actor.defending = false;
                                action.target.health += 5;
                                if (action.target.health > action.target.maxHealth) {
                                    action.target.health = action.target.maxHealth;
                                }
                                narrative.push(action.actor.name + " healed " + action.target.name + " for " + action.actor.attack + " damage.");
                                actor.sp -= 75;
                            }

                            if (action.action === 'defend') {
                                action.target.defending = true;
                                action.actor.animation = "nothing";
                                narrative.push(action.actor.name + " is defending " + action.target.name + ".");
                                actor.sp -= 50;
                            }
                        }
                    });

                    var losing = battle.loseConditions.some(function(condition) {
                        return condition(battle);
                    });

                    var winning = battle.winConditions.some(function(condition) {
                        return condition(battle);
                    });

                    if (losing) {
                        $interval.cancel(gameClock);
                    }

                    if (winning) {
                        $interval.cancel(gameClock);
                    }
                }, 25)
            };

        }
    })
    .controller("BattleController", function($scope, Actor, Battle) {
        var battle = new Battle();

        console.log("Created battle..", battle);

        $scope.battle = battle;

        var badGuy = new Actor({
            name: "Common Troll",
            side: "evil",
            body: "villain",
            health: 25,
            speed: 3
        });

        $scope.game.party.forEach(function(hero) {
            battle.actors.push(hero);
            hero.target = badGuy;
        })

        $scope.startBattle = function() {
            $scope.isFighting = true;
            $scope.battle.start();
        }

        battle.actors.push(badGuy);
    })
