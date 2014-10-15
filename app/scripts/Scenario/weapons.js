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
    "trustyCrowbar": {
        name: "Trusty Crowbar",
        appearance: "crowbar-basic",
        cost: 400,
        canBuy:true,
        description:"Good at persuading people",
        location:"weapon",
        attack: 10
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
    "swordOfValor": {
        name: "Sword of Valor",
        appearance: "sword-mighty",
        // canBuy:true,
        cost: 1500,
        description:"Does not make you more valorous",
        location:"weapon",
        attack: 17
    }
});