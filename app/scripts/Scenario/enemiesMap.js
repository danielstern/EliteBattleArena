angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(foes, Actor) {
    return {
        1: [foes.commonTroll],
        2: [foes.skeleton,foes.skeleton],
        3: [foes.bear,foes.commonTroll],
    }
})
