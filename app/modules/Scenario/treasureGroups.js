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
            reward: 'weak-items',
            probability: 1,
        }],
        'medium-enemy': [{
            reward: "nothing",
            probability: 10,
        }, {
            reward: "gold",
            probability: 10,
        }, {
            reward: 'weak-items',
            probability: 5,
        },{
            reward: 'medium-items',
            probability: 5,
        }],
        'strong-enemy': [{
            reward: "nothing",
            probability: 10,
        }, {
            reward: "gold",
            probability: 15,
        }, {
            reward: 'medium-items',
            probability: 5,
        },{
            reward: 'strong-items',
            probability: 2,
        }],
        'elite-enemy': [{
            reward: 'strong-items',
            probability: 5,
        }],
        'weak-items': [{
            reward:'weak-weapons',
            probability: 1,
        },{
            reward:'weak-armor',
            probability: 1,
        }],
        'medium-items': [{
            reward:'medium-weapons',
            probability: 1,
        },{
            reward:'medium-armor',
            probability: 1,
        }],
        'strong-items': [{
            reward:'strong-weapons',
            probability: 1,
        },{
            reward:'strong-armor',
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
            reward:'elite-armor',
            probability: 2,
        },{
            reward:'elite-weapon',
            probability: 2,
        }],
        'elite-armor':[{
            reward:armor.hatOfTruth,
            probability: 5,
        },{
            reward:armor.gentlemansCoat,
            probability: 5,
        },{
            reward:armor.lidlessEye,
            probability: 5,
        }],
        'elite-weapons':[{
            reward:weapons.greatSword,
            probability: 5,
        },{
            reward:weapons.mithrilCrowbar,
            probability: 5,
        },,{
            reward:weapons.elvenBow,
            probability: 5,
        }]
    }
})
