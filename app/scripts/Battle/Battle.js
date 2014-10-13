angular.module("EliteBattleArena.Battle")

.factory("Battle", function($interval, conditions, characterFilters,$state) {
    return function() {

        this.actors = [];
        this.currentTurn = 0;
        this.narrative = [];

        var battle = this;

        this.winConditions = [conditions.allVillainsDead];
        this.loseConditions = [conditions.allHeroesDead];

        battle.targetNextValidUnit = function() {

            var enemies = characterFilters.isEvil(battle.actors);
            enemies = characterFilters.isAlive(enemies);

            var targetIndex = enemies.indexOf(battle.target);
            console.log("target index?", targetIndex, targetIndex.length);
            if (targetIndex === enemies.length - 1) {
                battle.target = enemies[0];
            } else {
                battle.target = enemies[targetIndex + 1];
            }

        }

        battle.stop = function() {
            $interval.cancel(gameClock);
        }
        var gameClock;
        this.start = function() {
            characterFilters.isGood(battle.actors)[0].controlled = true;

            var enemies = characterFilters.isEvil(battle.actors);
            gameClock = $interval(function() {

                enemies = characterFilters.isAlive(enemies);
                if (!battle.target || battle.target.dead) battle.targetNextValidUnit();
                battle.currentTurn++;
                var narrative = battle.narrative;
                battle.actors.forEach(function(actor) {
                    if (actor.health <= 0) {
                        actor.animation = "dead";
                        actor.dead = true;
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
                                }
                                else if (selection == 'retreat') {
                                    // battle.targetNextValidUnit();
                                    battle.stop();
                                    $state.go("main.status");
                                }
                            }

                            actor.selectedAction = undefined;
                        }
                    }

                    if (!action) return;

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


                });

                var losing = battle.loseConditions.some(function(condition) {
                    return condition(battle);
                });

                var winning = battle.winConditions.some(function(condition) {
                    return condition(battle);
                });

                if (losing) {
                    battle.victory = false;
                    // $interval.cancel(gameClock);
                }

                if (winning) {
                    battle.victory = true;
                    // $interval.cancel(gameClock);
                }
            }, 25)
        };

    }
})
