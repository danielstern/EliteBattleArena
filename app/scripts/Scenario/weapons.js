angular.module("EliteBattleArena.Scenario")
.value("weapons", {
    "punySpear": {
        name: "Puny Spear",
        location:"weapon",
        attack: 4
    },
    "cheapDagger": {
        name: "Cheap Dagger",
        appearance: "dagger-basic",
        location:"weapon",
        attack: 2
    },
    "ironDagger": {
        name: "Iron Dagger",
        appearance: "dagger-basic",
        cost: 350,
        description:"A respectable dagger",
        location:"weapon",
        attack: 6
    }
});