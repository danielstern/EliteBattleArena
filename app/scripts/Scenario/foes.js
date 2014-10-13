angular.module("EliteBattleArena.Scenario")

.service("foes", function(weapons) {
    return {
        commonTroll: {
            name: "Common Troll",
            side: "evil",
            body: "villain",
            health: 25,
            speed: 3,
            attack: 4,
            equip: {
                weapon:weapons.cheapDagger
            }
        },
        deadlyTroll: {
            name: "Deadly Troll",
            side: "evil",
            body: "villain",
            health: 35,
            attack: 5,
            speed: 3
        }
    }
})