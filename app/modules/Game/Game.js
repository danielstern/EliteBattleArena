angular.module("EliteBattleArena.Game")
.factory("Game", function(Actor) {
    return function() {
        this.party = [];
        this.inventory = [];
        this.currentDungeonLevel = 1;
        this.maxDungeonLevel = 1;
        this.gold = 0;

        // settings
        this.musicVolume = 0.3;
        this.soundVolume = 0.3;
    }
})
