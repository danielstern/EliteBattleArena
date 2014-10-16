angular.module("EliteBattleArena.AI")
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