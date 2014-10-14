angular.module("EliteBattleArena.Scenario")
.value("weapons", {
    "punySpear": {
        name: "Puny Spear",
        location:"weapon",
        appearance: "spear-basic",
        attack: 4,
        cost: 50
    },
    "cheapDagger": {
        name: "Cheap Dagger",
        appearance: "dagger-basic",
        location:"weapon",
        cost: 150,
        attack: 2
    },
    "ironDagger": {
        name: "Iron Dagger",
        appearance: "dagger-fancy",
        cost: 350,
        description:"A respectable dagger",
        location:"weapon",
        attack: 6
    },
    "trustyCrowbar": {
        name: "Trusty Crowbar",
        appearance: "crowbar-basic",
        cost: 700,
        description:"Good at persuading people",
        location:"weapon",
        attack: 10
    },
    "swordOfValor": {
        name: "Sword of Valor",
        appearance: "sword-mighty",
        cost: 1500,
        description:"Does not make you more valorous",
        location:"weapon",
        attack: 17
    }
});