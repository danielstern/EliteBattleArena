angular.module("EliteBattleArena.Scenario")

.value("armor", {
    "commonSkullCap": {
        name: "Common Skullcap",
        description: "It's quite common.",
        cost: 100,
        location: 'head',
        defense: 1,
        appearance: "helm-basic"
    },
    "helmetOfStrength": {
        name: "Helmet of Strenth",
        description: "A stout helmet. Increases health by 20",
        cost: 200,
        location: "head",
        defense: 5,
        appearance: "helm-fancy"
    },
    "shoddyArmor": {
        name: "Shoddy Armor",
        defense: 3
    }
})