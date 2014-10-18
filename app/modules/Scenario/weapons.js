angular.module("EliteBattleArena.Scenario")
.service("weapons", function(){
 return {
    "cheapDagger": {
        name: "Cheap Dagger",
        appearance: "dagger-basic",
        location:"weapon",
        description: "Not an especially nice dagger",
        canBuy:true,
        cost: 50,
        attack: 2
    },
    "punySpear": {
        name: "Puny Spear",
        location:"weapon",
        canBuy:true,
        appearance: "spear-basic",
        description: "Makes one rethink the expression, 'it's better than nothing.'",
        attack: 4,
        cost: 150
    },
    "ironDagger": {
        name: "Iron Dagger",
        appearance: "dagger-fancy",
        cost: 250,
        canBuy:true,
        description:"A respectable dagger",
        location:"weapon",
        // canBuy:true,
        attack: 6
    },
    "bloodDagger": {
        name: "Blood Dagger",
        appearance: "dagger-fancy",
        cost: 2000,
        // canBuy:true,
        description:"Glows an eerie red color.",
        location:"weapon",
        canBuy:true,
        attack: 9,
        bonus: {
           drain: 0.1
        }
    },
    "scowlingKnife": {
        name: "Scowling Knife",
        appearance: "dagger-fancy",
        cost: 1000,
        // canBuy:true,
        description:"This is a mean knife.",
        location:"weapon",
        attack: 6,
        bonus: {
            speed: 1
        }
    },
    "ghostlyBow": {
        name: "Ghostly Bow",
        appearance: "bow-basic",
        cost: 500,
        // canBuy:false,
        description:"Oooooo!",
        location:"weapon",
        // canBuy:true,
        attack: 5,
        bonus: {
            speed:1
        }
    },
    "beechwoodBow": {
        name: "Beechwood Bow",
        appearance: "bow-basic",
        cost: 600,
        // canBuy:true,
        description:"Made of high-quality wood",
        location:"weapon",
        attack: 12,
        bonus: {
            speed:2
        }
    },
    "trustyCrowbar": {
        name: "Trusty Crowbar",
        appearance: "crowbar-basic",
        cost: 550,
        // canBuy:true,
        description:"Good at persuading people",
        location:"weapon",
        attack: 10
    },
    "rustedHammer": {
        name: "Rusted Hammer",
        appearance: "hammer-basic",
        cost: 250,
        canBuy:true,
        description:"I doubt it could hammer much of anything.",
        location:"weapon",
        attack: 6
    },
    "crimsonHammer": {
        name: "Crimson Hammer",
        appearance: "hammer-basic",
        cost: 2500,
        // canBuy:true,
        description:"Is that rust or...",
        location:"weapon",
        attack: 16,
        bonus: {
            drain: 0.1
        }
    },
    "steelHammer": {
        name: "Steel Hammer",
        appearance: "hammer-basic",
        cost: 650,
        // canBuy:true,
        description:"A high-quality hammer",
        location:"weapon",
        attack: 14
    },
    "ironSword": {
        name: "Iron Sword",
        appearance: "sword-basic",
        canBuy:true,
        cost: 3000,
        description:"As used by Iron Man",
        location:"weapon",
        attack: 18,
      
    },
    "swordOfValor": {
        name: "Sword of Valor",
        appearance: "sword-mighty",
        // canBuy:true,
        cost: 1500,
        description:"Does not make you more valorous",
        location:"weapon",
        attack: 22,
        bonus:{
            speed:2
        }
    },
    "greaterSwordOfValor": {
        name: "Sword of Valor",
        appearance: "sword-mighty",
        // canBuy:true,
        cost: 3000,
        description:"Does not make you more valorous",
        location:"weapon",
        attack: 27,
        bonus:{
            speed:2,
            heal:0.05
        }
    },
    "swiftAxe": {
        name: "Swift Axe",
        appearance: "axe-basic",
        // canBuy:true,
        cost: 2000,
        description:"They won't know what hit 'em",
        location:"weapon",
        attack: 24,
        bonus:{
            speed:3,
            bonus: {
                drain: 0.1
            }
        }
    },
    "terrifyingCleaver": {
        name: "Terrifying Cleaver",
        appearance: "axe-basic",
        // canBuy:true,
        cost: 4000,
        description:"They won't know what hit 'em",
        location:"weapon",
        attack: 24,
        bonus:{
            speed:3
        }
    },
    "greatSword": {
        name: "Great Sword",
        appearance: "sword-mighty",
        // canBuy:true,
        cost: 4000,
        description:"It's a great sword.",
        location:"weapon",
        attack: 40,
    },
    "mithrilCrowbar": {
        name: "Mithril Crowbar",
        appearance: "crowbar-basic",
        // canBuy:true,
        cost: 4500,
        description:"It's a great sword.",
        location:"weapon",
        attack: 35,
        bonus: {
            speed:2
        }
    },
    "elvenBow": {
        name: "Elven Bow",
        appearance: "bow-basic",
        cost: 5500,
        // canBuy:true,
        description:"A classic bow.",
        location:"weapon",
        attack: 30,
        bonus: {
            speed:4,
            drain: 0.1
        }
    },
    "levantineSword": {
        name: "Levantine Sword",
        appearance: "sword-mighty",
        cost: 7000,
        // canBuy:true,
        description:"A classic bow.",
        location:"weapon",
        attack: 40,
        bonus: {
            speed:3,
            heal:0.05,
        }
    },
}   
});