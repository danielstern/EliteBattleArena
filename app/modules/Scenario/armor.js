angular.module("EliteBattleArena.Scenario")

.value("armor", {
    // helms
    "commonSkullCap": {
        name: "Common Skullcap",
        description: "It's quite common.",
        cost: 400,
        canBuy: true,
        location: 'head',
        defense: 2,
        appearance: "helm-fancy"
    },
    "superiorHelm": {
        name: "Superior Helm",
        description: "Makes you look superior.",
        cost: 1500,
        canBuy: true,
        location: 'head',
        defense: 7,
        appearance: "helm-fancy",
        bonus: {
            speed: 1
        }
    },
    "centurionHelmet": {
        name: "Centurion's Helm",
        description: "They don't make 'em like this anymore.",
        cost: 3500,
        // canBuy: true,
        location: 'head',
        defense: 16,
        appearance: "helm-fancy",
        bonus: {
            speed: 2
        }
    },
    "hatOfTruth": {
        name: "Hat of Truth",
        description: "Truthfully it doesn't do anything special.",
        cost: 7000,
        canBuy: true,
        location: 'head',
        elite: true,
        defense: 30,
        appearance: "helm-fancy",
        bonus: {
            speed: 3
        }
    },
    "bloodredBonnet": {
        name: "Blood Red Bonnet",
        cost: 4000,
        location: "body",
        // canBuy: true,
        appearance: 'helm-fancy',
        rarity:'rare',
        description: "This time it's the wolf who'll get eaten.",
        defense: 13,
        bonus:{
            heal:0.03,
        }
    },

    "helmetOfStrength": {
        name: "Hat of Strength",
        description: "A glorious and mighty helm.",
        cost: 2000,
        location: "head",
        // canBuy: true,
        defense: 10,
        attack:2,
        appearance: "helm-basic"
    },
    // armor
    "shoddyArmor": {
        name: "Shoddy Armor",
        cost: 600,
        location: "body",
        canBuy: true,
        appearance: 'armor-basic',
        description: "Shoddy armor indeed.",
        defense: 3
    },
    "revitalizingPlate": {
        name: "Revitalizing Plate",
        cost: 2000,
        location: "body",
        // canBuy: true,
        appearance: 'armor-basic',
        description: "Embellished with the leaves of enchanted holly trees",
        defense: 9,
        bonus:{
            heal:0.03,
        }
    },
    "chainMail": {
        name: "Chain Mail",
        cost: 1300,
        location: "body",
        canBuy: true,
        appearance: 'armor-basic',
        description: "Try something different for a chain.",
        defense: 7
    },
    "handsomeBreastplate": {
        name: "Handsome Plate",
        cost: 2000,
        location: "body",
        // canBuy: true,
        appearance: 'armor-fancy',
        description: "It kind of makes you feel ugly by comparison",
        defense: 12
    },
    "dashingMail": {
        name: "Daring Mail",
        cost: 4000,
        location: "body",
        canBuy: true,
        appearance: 'armor-elite',
        description: "I dare you to buy this armor.",
        defense: 20
    },
    "gentlemansCoat": {
        name: "Gentleman's Coat",
        cost: 6000,
        location: "body",
        // canBuy: true,
        appearance: 'armor-elite',
        description: "Not gentle man's coat.",
        defense: 35
    },

    // shields
    "roughShield": {
        name: "Rough Shield",
        defense: 2,
        cost: 200,
        canBuy: true,
        location: "shield",
        description: "Not so rough on the inside.",
        appearance: "shield-basic"
    },
    "swarthyBuckler": {
        name: "Swarthy Buckler",
        defense: 9,
        cost: 2000,
        canBuy: true,
        location: "shield",
        description: "Har har!",
        appearance: "shield-fancy",
        bonus: {
            speed: 1
        }
    },
    "defender": {
        name: "Defender",
        defense: 20,
        cost: 5000,
        canBuy: true,
        location: "shield",
        rarity:"elite",
        description: "Makes you defensive in conversation",
        appearance: "shield-elite",
        bonus: {
            speed: 2,
            heal: 0.01
        }
    },
    "lidlessEye": {
        name: "The Lidless Eye",
        defense: 35,
        cost: 7000,
        // canBuy: true,
        location: "shield",
        description: "It must get very dry",
        appearance: "shield-elite",
        bonus: {
            speed: 3,
            heal: 0.01
        }
    }
})
