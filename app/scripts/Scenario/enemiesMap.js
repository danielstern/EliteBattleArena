angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(foes, Actor) {
    return {
        1: [foes.commonTroll],
        2: [foes.skeleton,foes.skeleton],
        3: [foes.bear,foes.commonTroll],
        4: [foes.swampman,foes.swampman],
        5: [foes.ghoul,foes.swampman],
        6: [foes.ghoul,foes.ghoul],
        7: [foes.skeletalWarrior,foes.skeleton,foes.skeleton],
        8: [foes.skeletalWarrior,foes.ghoul],
        9: [foes.evilThing],

    }
})
