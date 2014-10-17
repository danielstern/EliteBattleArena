angular.module("EliteBattleArena.Scenario")
.value("weapons", {
    "cheapDagger": {
        name: "Cheap Dagger",
        appearance: "dagger-basic",
        location:"weapon",
        canBuy:true,
        cost: 50,
        attack: 2
    },
    "punySpear": {
        name: "Puny Spear",
        location:"weapon",
        canBuy:true,
        appearance: "spear-basic",
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
        canBuy:true,
        attack: 6
    },
    "scowlingKnife": {
        name: "Scowling Knife",
        appearance: "dagger-fancy",
        cost: 1000,
        canBuy:true,
        description:"This is a mean knife.",
        location:"weapon",
        canBuy:true,
        attack: 6,
        bonus: {
            speed: 1
        }
    },
    "ghostlyBow": {
        name: "Ghostly Bow",
        appearance: "bow-basic",
        cost: 500,
        canBuy:false,
        description:"Oooooo!",
        location:"weapon",
        // canBuy:true,
        attack: 3
    },
    "beechwoodBow": {
        name: "Beechwood Bow",
        appearance: "bow-basic",
        cost: 600,
        canBuy:true,
        description:"Oooooo!",
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
        canBuy:true,
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
    "steelHammer": {
        name: "Steel Hammer",
        appearance: "hammer-basic",
        cost: 650,
        canBuy:true,
        description:"A high-quality hammer",
        location:"weapon",
        attack: 14
    },
    "ironSword": {
        name: "Iron Sword",
        appearance: "sword-basic",
        canBuy:true,
        cost: 1200,
        description:"As used by Iron Man",
        location:"weapon",
        attack: 18,
      
    },
    "swordOfValor": {
        name: "Sword of Valor",
        appearance: "sword-mighty",
        canBuy:true,
        cost: 1500,
        description:"Does not make you more valorous",
        location:"weapon",
        attack: 22,
        bonus:{
            speed:2
        }
    },
    "swiftAxe": {
        name: "Swift Axe",
        appearance: "axe-basic",
        canBuy:true,
        cost: 2000,
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
            speed:4
        }
    },
});