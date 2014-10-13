angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(foes, Actor) {
    return {
        1: [new Actor(foes.commonTroll)],
        2: [new Actor(foes.commonTroll), new Actor(foes.commonTroll)],
        3: [new Actor(foes.commonTroll), new Actor(foes.deadlyTroll)],
    }
})
