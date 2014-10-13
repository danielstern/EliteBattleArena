angular.module("EliteBattleArena.Game")
.factory("Game", function(Actor) {
    return function() {
        this.party = [];
        this.inventory = [];
        this.currentDungeonLevel = 1;
        this.maxDungeonLevel = 1;
    }
})
