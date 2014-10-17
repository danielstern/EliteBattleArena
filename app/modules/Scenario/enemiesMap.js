angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(enemiesGroups, Actor) {
    return {
        1: [enemiesGroups['weak-enemy']],
        2: [enemiesGroups['weak-enemy'],enemiesGroups['weak-enemy']],
        3: [enemiesGroups['weak-enemy'],enemiesGroups['medium-enemy']],
        4: [enemiesGroups['medium-enemy'],enemiesGroups['medium-enemy']],
        5: [enemiesGroups['medium-enemy'],enemiesGroups['medium-enemy'],enemiesGroups['weak-enemy']],
        6: [enemiesGroups['strong-enemy'],enemiesGroups['medium-enemy']],
        7: [enemiesGroups['strong-enemy'],enemiesGroups['strong-enemy']],
        8: [enemiesGroups['strong-enemy'],enemiesGroups['strong-enemy'],enemiesGroups['medium-enemy']],
        9: [enemiesGroups['elite-enemy']],

    }
})
