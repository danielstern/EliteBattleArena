angular.module("EliteBattleArena")
    .factory("Battle", function($interval, conditions) {
        return function() {

            this.actors = [];
            this.currentTurn = 0;

            var battle = this;

            this.winConditions = [conditions.allVillainsDead];
            this.loseConditions = [conditions.allHeroesDead];

            var gameClock;
            this.start = function() {
                gameClock = $interval(function() {
                    console.log("Game clock ticking...");
                    battle.currentTurn++;
                    var narrative = [];
                    battle.actors.forEach(function(actor) {
                        actor.sp += actor.speed;
                        if (actor.sp > 99) {
                            actor.sp = 100;
                            actor.canAct = true;
                        } else {
                            actor.canAct = false;
                        }

                        if (actor.canAct) {
                            action = actor.act(battle, actor);
                            actor.sp = 0;

                            if (action.action === 'attack') {
                                action.actor.defending = false;
                                action.target.health -= action.target.defending ? Math.floor(action.actor.attack / 2) : action.actor.attack;
                                narrative.push(action.actor.name + " attacked " + action.target.name + " for " + action.actor.attack + " damage.");
                                action.actor.animation = "attacking";
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
                            }

                            if (action.action === 'defend') {
                                action.target.defending = true;
                                narrative.push(action.actor.name + " is defending " + action.target.name + ".");
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
                        // narrative.push("The forces of evil have overwhelmed us!");
                        gameClock();
                        // handle loss
                    }

                    if (winning) {
                        // narrative.push("The forces of good have prevailed!",gameClock);
                        console.log("YOU WIN!",gameClock);
                        $interval.cancel(gameClock);
                        // handleWin
                    }
                }, 25)
            };

        }
    })
    .controller("BattleController", function($scope, Actor, Battle) {
        var battle = new Battle();

        console.log("Created battle..", battle);

        $scope.battle = battle;

        $scope.game.party.forEach(function(hero) {
            battle.actors.push(hero);
        })

        $scope.startBattle = function() {
            $scope.isFighting = true;
            $scope.battle.start();
        }

        battle.actors.push(new Actor({
            name: "Common Troll",
            side: "evil",
            body: "villain",
            health: 25,
            speed: 3
        }));
    })
