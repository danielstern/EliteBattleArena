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
            equip: {
                weapon:weapons.cheapDagger
            }
        },
        skeleton: {
            name: "Rag n' Bones",
            side: "evil",
            health: 15,
            attack: 6,
            speed: 4,
            body: 'skeleton',
            equip: {
                weapon:weapons.ghostlyBow
            }
        },
        bear: {
            name: "Grizzly Bear",
            side: "evil",
            health: 45,
            attack: 12,
            speed: 1,
            body: 'bear'
        },
        swampman: {
            name:"Swamp Man",
            side: "evil",
            health: 50,
            attack: 9,
            speed: 3,
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
            speed: 5,
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
            speed: 5,
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
            speed: 3,
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
            speed: 2,
            body: 'bear'
        },
        bogMan: {
            name:"Bog Man",
            side: "evil",
            health: 80,
            attack: 9,
            speed: 5,
            body: 'swampman',
            equip: {
                weapon:weapons.steelHammer,
                armor:armor.shoddyArmor
            }
        },
        frowningGhoul: {
            name:"Crying Ghoul",
            side: "evil",
            health: 90,
            attack: 24,
            speed: 5,
            body: 'ghoul',
            equip: {
                weapon:weapons.cheapDagger,
                armor:armor.shoddyArmor
            }
        },
        monstrousThing: {
            name:"Thing that Should not Be",
            side: "evil",
            health: 200,
            attack: 15,
            speed: 6,
            body: 'evilthing',
            equip: {
                weapon:weapons.punySpear
            }
        },
        lich: {
            name:"Lich",
            side: "evil",
            health: 350,
            attack: 40,
            speed: 5,
            body: 'ghoul',
            equip: {
                weapon:weapons.swordOfValor,
                armor:armor.handsomeBreastplate
            }
        },
    }
})