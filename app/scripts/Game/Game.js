angular.module("EliteBattleArena.Game")
.factory("Game", function(Actor) {
    return function() {
        this.party = [
            new Actor({
                name: "Friendus Fortunato",
                side: "good",
                body: "hero",
            })
        ];

        this.inventory = [];
        this.gold = 420;
        this.currentDungeonLevel = 1;
        this.maxDungeonLevel = 1;
    }
})
