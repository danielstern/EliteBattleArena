angular.module("EliteBattleArena.Battle")

.factory("BattleEngine", function($interval, conditions, characterFilters,battleTurn, Battle,$state) {
        return function() {



            // var battle = new Battle();
            


            // var gameClock;
            // this.start = function() {
            //     characterFilters.isGood(battle.actors)[0].controlled = true;

            //     battle.on(stop,function() {
            //         $interval.cancel(gameClock);
            //     });



            //     gameClock = $interval(function(){
            //         battleTurn(battle);
            //     },20);
            // };

        }
    })
    .factory("Battle",function(characterFilters,conditions){
        return function(){
            var battle = this;

            this.actors = [];
            this.currentTurn = 0;
            this.narrative = [];

            var listeners = [];
            


            this.on = function(event, listener) {
                listeners.push({
                    trigger: event,
                    func: listener
                })
            };


            this.broadcast = function(event) {
                listeners.forEach(function(listener) {
                    if (listener.trigger === event) {
                        listener.func(battle);
                    }
                })
            }

            

            this.winConditions = [conditions.allVillainsDead];
            this.loseConditions = [conditions.allHeroesDead];

            battle.stop = function() {
                battle.broadcast("stop");
            }

            this.targetNextValidUnit = function() {

                var enemies = characterFilters.isEvil(battle.actors);
                enemies = characterFilters.isAlive(enemies);

                var targetIndex = enemies.indexOf(battle.target);
                if (targetIndex === enemies.length - 1) {
                    battle.target = enemies[0];
                } else {
                    battle.target = enemies[targetIndex + 1];
                }

            }

          


        }
    })
    .service("battleTurn", function(conditions) {
        return function(battle) {

            if (!battle.actors) {
                throw new Error("Unable to have one-sided battle");
            }

            if (!battle.target || battle.target.dead) battle.targetNextValidUnit();
            battle.currentTurn++;
            var narrative = battle.narrative;
            battle.actors.forEach(function(actor) {
                if (actor.health <= 0.5) {
                    actor.health = 0;
                    actor.animation = "dead";
                    actor.dead = true;
                    return;
                };

                if (actor.health > actor.maxHealth) {
                    actor.health = actor.maxHealth;
                }
                actor.sp += actor.getSpeed() / 4;
                actor.health += actor.getHealPerCycle();

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
                            var selection = actor.selectedAction;
                            if (selection == 'heal' || selection === "defend") {
                                action = {
                                    action: selection,
                                    target: actor,
                                    actor: actor
                                }
                            } else if (selection == 'attack') {
                                action = {
                                    action: selection,
                                    target: battle.target,
                                    actor: actor
                                }
                            } else if (selection == 'target') {
                                battle.targetNextValidUnit();
                            } else if (selection == 'retreat') {
                                // battle.stop();
                                battle.broadcast("escape");
                                // $state.go("main.status");
                            }
                        }

                        actor.selectedAction = undefined;
                    }
                }

                if (!action) return;

                if (action.action === 'attack') {
                    action.actor.defending = false;
                    var damage = action.actor.getAttack();
                    if (action.target.defending) {
                        damage /= 2;
                        battle.broadcast("hit");
                    } else {
                        battle.broadcast("hit");
                        battle.broadcast("block");
                    }
                    damage /= 1 + action.target.getDefense() / 20;
                    if (damage < 0) {
                        damage = 0;
                    }
                    action.target.health -= damage;
                    action.actor.animation = "attacking";
                    actor.sp = 0;

                    battle.broadcast("attack");
                }

                if (action.action === 'nothing' || undefined) {
                    // narrative.push(action.actor.name + " did nothing.");
                    action.actor.animation = "nothing";
                }

                if (action.action === 'heal' || undefined) {
                    if (!actor.heals) return;
                    action.actor.defending = false;
                    action.target.health += 75;
                    if (action.target.health > action.target.maxHealth) {
                        action.target.health = action.target.maxHealth;
                    }
                    // narrative.push(action.actor.name + " healed " + action.target.name + " for " + action.actor.attack + " damage.");
                    actor.sp -= 75;
                    actor.heals--;
                }

                if (action.action === 'defend') {
                    action.target.defending = true;
                    action.actor.animation = "nothing";
                    // narrative.push(action.actor.name + " is defending " + action.target.name + ".");
                    actor.sp -= 50;
                }


            });

            var losing = battle.loseConditions.some(function(condition) {
                return condition(battle);
            });

            var winning = battle.winConditions.some(function(condition) {
                return condition(battle);
            });

            if (losing) {
                battle.victory = false;
                // battle.stop();
            }

            if (winning) {
                battle.victory = true;
                // battle.stp[)_]
            }
        }
    })
