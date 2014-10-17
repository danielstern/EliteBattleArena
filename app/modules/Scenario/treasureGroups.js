angular.module("EliteBattleArena.Scenario")

.service("treasuresGroups", function(weapons, armor) {
    return {
        'weak-enemy': [{
            reward: "nothing",
            probability: 10,
        }, {
            reward: "gold",
            probability: 5,
        }, {
            reward: 'weak-weapons',
            probability: 1,
        }],
        'medium-enemy': [{
            reward: "nothing",
            probability: 10,
        }, {
            reward: "gold",
            probability: 10,
        }, {
            reward: 'weak-weapons',
            probability: 5,
        },{
            reward: 'medium-weapons',
            probability: 5,
        }],
        'strong-enemy': [{
            reward: "nothing",
            probability: 10,
        }, {
            reward: "gold",
            probability: 15,
        }, {
            reward: 'medium-weapons',
            probability: 5,
        },{
            reward: 'strong-weapons',
            probability: 2,
        }],
        'elite-enemy': [{
            reward: 'strong-weapons',
            probability: 1,
        }],
        'weak-weapons': [{
            reward:weapons.cheapDagger,
            probability: 5,
        },{
            reward:weapons.punySpear,
            probability: 4,
        },{
            reward:weapons.punySpear,
            probability: 4,
        },{
            reward:weapons.scowlingKnife,
            probability: 2,
        },{
            reward:weapons.trustyCrowbar,
            probability: 2,
        }],
        'medium-weapons': [{
            reward:weapons.trustyCrowbar,
            probability: 5,
        },{
            reward:weapons.beechwoodBow,
            probability: 4,
        },{
            reward:weapons.steelHammer,
            probability: 2,
        },{
            reward:'weak-weapons',
            probability: 2,
        },{
            reward:weapons.ironSword,
            probability: 1,
        }],
        'strong-weapons': [{
            reward:weapons.ironSword,
            probability: 5,
        },{
            reward:weapons.swordOfValor,
            probability: 4,
        },{
            reward:'medium-weapons',
            probability: 2,
        },{
            reward:weapons.swiftAxe,
            probability: 1,
        }],
        'weak-armor': [{
            reward:armor.commonSkullCap,
            probability: 5,
        },{
            reward:armor.shoddyArmor,
            probability: 4,
        },{
            reward:armor.roughShield,
            probability: 4,
        },{
            reward:armor.chainMail,
            probability: 2,
        }],
        'medium-armor': [{
            reward:armor.handsomeBreastplate,
            probability: 5,
        },{
            reward:armor.helmetOfStrength,
            probability: 4,
        },{
            reward:armor.swarthyBuckler,
            probability: 2,
        },{
            reward:'weak-armor',
            probability: 2,
        }],
        'strong-armor': [{
            reward:armor.defender,
            probability: 5,
        },{
            reward:armor.dashingMail,
            probability: 4,
        },{
            reward:'medium-armor',
            probability: 2,
        },{
            reward:armor.centurionHelmet,
            probability: 1,
        }],
        'elite-items': [{
            reward:armor.hatOfTruth,
            probability: 5,
        },{
            reward:armor.gentlemansCoat,
            probability: 5,
        }]
    }
})
