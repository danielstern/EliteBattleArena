angular.module("EliteBattleArena")

.service("conditions", function() {
    this.allHeroesDead = function(game) {
        return game.actors.filter(function(actor) {
            return actor.side === "good";
        }).every(function(hero) {
            return hero.health <= 0;
        });
    };

    this.allVillainsDead = function(game) {
        return game.actors.filter(function(actor) {
            return actor.side === "evil";
        }).every(function(villain) {
            return villain.health <= 0;
        });
    }
})

.filter('slice', function() {
    return function(arr, start, end) {
        return (arr || []).slice(start, end);
    };
})

.filter('alignment', function() {
    return function(array, alignment) {
        if (!array) return;
        return array.filter(function(hero) {
            return hero.side === alignment;
        })
    };
})
