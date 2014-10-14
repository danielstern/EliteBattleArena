angular.module("EliteBattleArena.Scenario")

.service("foes", function(weapons) {
    return {
        commonTroll: {
            name: "Common Troll",
            side: "evil",
            body: "villain",
            health: 10,
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
        },
        skeleton: {
            name: "Rag n' Bones",
            side: "evil",
            health: 15,
            attack: 6,
            speed: 4,
            body: 'skeleton'
        },
        bear: {
            name: "Grizzly Bear",
            side: "evil",
            health: 45,
            attack: 7,
            speed: 1,
            body: 'bear'
        }
    }
})