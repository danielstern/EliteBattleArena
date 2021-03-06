angular.module("EliteBattleArena.Scenario")

.service("foes", function(weapons,armor) {
    return {
        commonTroll: {
            name: "Common Troll",
            side: "evil",
            body: "villain",
            health: 25,
            speed: 3,
            attack: 4,
            treasureClass:"weak-enemy",
            equip: {
                weapon:weapons.cheapDagger
            }
        },
        skeleton: {
            name: "Rag n' Bones",
            side: "evil",
            health: 15,
            attack: 6,
            speed: 6,
            body: 'skeleton',
            treasureClass:"weak-enemy",
            equip: {
                weapon:weapons.ghostlyBow
            }
        },
        bear: {
            name: "Grizzly Bear",
            side: "evil",
            health: 45,
            attack: 12,
            treasureClass:"weak-enemy",
            speed: 3,
            body: 'bear'
        },
        swampman: {
            name:"Swamp Man",
            side: "evil",
            health: 50,
            treasureClass:"weak-enemy",
            attack: 9,
            speed: 5,
            body: 'swampman',
            equip: {
                weapon:weapons.cheapDagger,
                shield:armor.roughShield
            }
        },
        ghoul: {
            name:"Laughing Ghoul",
            side: "evil",
            health: 35,
            attack: 12,
            speed: 3,
            treasureClass:"weak-enemy",
            body: 'ghoul',
            equip: {
                weapon:weapons.cheapDagger
            }
        },
        skeletalWarrior: {
            name: "Skeletal Warrior",
            side: "evil",
            health: 55,
            attack: 9,
            treasureClass:"weak-enemy",
            speed: 6,
            body: 'skeleton',
            equip: {
                weapon:weapons.trustyCrowbar,
                shield:armor.roughShield
            }
        },
        evilThing: {
            name:"Evil Thing",
            side: "evil",
            health: 65,
            attack: 15,
            treasureClass:"medium-enemy",
            speed:4,
            body: 'evilthing',
            equip: {
                weapon:weapons.punySpear
            }
        },
        eliteTroll: {
            name: "Elite Troll",
            side: "evil",
            body: "villain",
            health: 65,
            speed: 3,
            treasureClass:"medium-enemy",
            attack: 4,
            equip: {
                weapon:weapons.trustyCrowbar
            }
        },
        polarBear: {
            name: "Polar Bear",
            side: "evil",
            health: 75,
            attack: 16,
            defense:2,
            treasureClass:"medium-enemy",
            speed: 3,
            body: 'bear'
        },
        bogMan: {
            name:"Bog Man",
            side: "evil",
            health: 80,
            attack: 9,
            treasureClass:"strong-enemy",
            speed: 4,
            body: 'swampman',
        },
        frowningGhoul: {
            name:"Crying Ghoul",
            side: "evil",
            health: 90,
            treasureClass:"strong-enemy",
            attack: 12,
            speed: 4,
            body: 'ghoul',
        },
        monstrousThing: {
            name:"Thing that Should not Be",
            side: "evil",
            health: 120,
            treasureClass:"strong-enemy",
            attack: 10,
            speed: 4,
            body: 'evilthing',
        },
        lich: {
            name:"Lich",
            side: "evil",
            health: 130,
            attack: 9,
            speed: 5,
            treasureClass:"strong-enemy",
            body: 'ghoul',
        },
        insidiousBeing: {
            name:"Insidious Being",
            side: "evil",
            health: 300,
            attack: 17,
            speed: 5,
            treasureClass:"elite-enemy",
            body: 'boss',
            equip: {
                weapon:weapons.swordOfValor,
                armor:armor.chainMail
            }
        },
    }
})