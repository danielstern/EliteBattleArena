angular.module("EliteBattleArena.Scenario")

.service("enemiesGroups", function(foes, Actor) {
    return {
        'weak-enemy': [{
            enemy: foes.commonTroll,
            probability: 10,
        },{
            enemy: foes.skeleton,
            probability: 8,
        },{
            enemy: foes.bear,
            probability: 4,
        },{
            enemy: foes.swampman,
            probability: 2,
        }],
        'medium-enemy': [{
            enemy: foes.ghoul,
            probability: 10,
        },{
            enemy: foes.skeletalWarrior,
            probability: 8,
        },{
            enemy: foes.evilThing,
            probability: 4,
        },{
            enemy: foes.polarBear,
            probability: 5,
        }],
        'strong-enemy': [{
            enemy: foes.bogMan,
            probability: 10,
        },{
            enemy: foes.frowningGhoul,
            probability: 8,
        },{
            enemy: foes.monstrousThing,
            probability: 4,
        }],
        'elite-enemy':[{
            enemy: foes.lich,
            probability: 4,
        }]
    } 
})
