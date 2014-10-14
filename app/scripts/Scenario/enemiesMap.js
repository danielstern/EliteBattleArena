angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(foes, Actor) {
    return {
        1: [new Actor(foes.commonTroll)],
        2: [new Actor(foes.skeleton), new Actor(foes.skeleton)],
        3: [new Actor(foes.bear),new Actor(foes.commonTroll)],
    }
})
