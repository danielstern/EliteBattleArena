angular.module("EliteBattleArena.AI",[])
.service("getRandomMove", function(characterFilters) {
    return function(game, self) {

        var targets = game.actors;
        targets = self.side === 'good' ? characterFilters.isEvil(targets) : characterFilters.isGood(targets);
        targets = characterFilters.isAlive(targets);
        var target = targets[0];

        if (!target) {
            console.error(self.name + " can't get target...", game);
            // return;
        }

        switch (Math.floor(Math.random() * 4)) {
            case 0:
                return {
                    action: "nothing",
                    target: undefined,
                    actor: this,
                };

            case 1:
                return {
                    action: "heal",
                    target: this,
                    actor: this,
                }
            case 2:
                if (target) {
                    return {
                        action: "attack",
                        target: target,
                        actor: this,
                    }
                };
            case 3:
                return {
                    action: "defend",
                    target: this,
                    actor: this,
                }
        }
    }
})

.value("characterFilters", {
    isWeak: function(actors) {
        var targets = actors.filter(function(enemy) {
            if (enemy.health < enemy.maxHealth / 10) {
                return true;
            }
        });
        return targets;
    },
    isEvil: function(actors) {
        return actors.filter(function(actor) {
            return actor.side === "evil";
        });
    },
    isGood: function(actors) {
        return actors.filter(function(actor) {
            return actor.side === "good";
        });
    },
    isAlive: function(actors) {
        return actors.filter(function(actor) {
            return actor.health > 0;
        });
    },
})