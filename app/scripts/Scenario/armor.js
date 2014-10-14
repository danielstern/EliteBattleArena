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
        cost:50,
        location:"body",
        appearance:'armor-basic',
        description:"Shoddy armor indeed",
        defense: 3
    },
    "roughShield": {
        name: "Rough Shield",
        defense: 5,
        cost: 300,
        location: "shield",
        description: "Not so rough on the inside.",
        appearance:"shield-basic"
    }
})