angular.module("EliteBattleArena.Scenario")

.service("party", function(foes, Actor) {
    return [{
        name: "Friendus Fortunato",
        side: "good",
        body: "hero",
        speed: 6,
        defense: 2
    }]
})
