angular.module("EliteBattleArena.Scenario")

.value("armor", {
    // helms
    "commonSkullCap": {
        name: "Common Skullcap",
        description: "It's quite common.",
        cost: 100,
        canBuy:true,
        location: 'head',
        defense: 2,
        appearance: "helm-fancy"
    },
    "superiorHelm": {
        name: "Superior Helm",
        description: "Makes you look superior.",
        cost: 400,
        canBuy:true,
        location: 'head',
        defense: 7,
        appearance: "helm-fancy"
    },

    "helmetOfStrength": {
        name: "Hat of Strength",
        description: "A glorious and mighty helm",
        cost: 2000,
        location: "head",
        // canBuy:true,
        defense: 10,
        appearance: "helm-basic"
    },
    // armor
    "shoddyArmor": {
        name: "Shoddy Armor",
        cost:200,
        location:"body",
        canBuy:true,
        appearance:'armor-basic',
        description:"Shoddy armor indeed",
        defense: 5
    },
    "handsomeBreastplate": {
        name: "Handsome Plate",
        cost:1000,
        location:"body",
        canBuy:true,
        appearance:'armor-fancy',
        description:"It kind of makes you feel ugly by comparison",
        defense: 12
    },
    "dashingMail": {
        name: "Daring Mail",
        cost:5000,
        location:"body",
        // canBuy:true,
        appearance:'armor-elite',
        description:"It kind of makes you feel ugly by comparison",
        defense: 12
    },

    // shields
    "roughShield": {
        name: "Rough Shield",
        defense: 4,
        cost: 300,
        canBuy:true,
        location: "shield",
        description: "Not so rough on the inside.",
        appearance:"shield-basic"
    },
    "swarthyBuckler": {
        name: "Swarthy Buckler",
        defense: 9,
        cost: 1500,
        canBuy:true,
        location: "shield",
        description: "Har har!",
        appearance:"shield-fancy"
    },
    "defender": {
        name: "Defender",
        defense: 18,
        cost: 5000,
        // canBuy:true,
        location: "shield",
        description: "Makes you defensive in conversation",
        appearance:"shield-elite"
    }
})