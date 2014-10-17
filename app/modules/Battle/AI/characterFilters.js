angular.module("EliteBattleArena.AI")
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