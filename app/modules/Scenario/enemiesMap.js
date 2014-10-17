angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(enemiesGroups, Actor) {
    var maps = {
        1: [enemiesGroups['weak-enemy']],
        // 2: [enemiesGroups['weak-enemy'],enemiesGroups['weak-enemy']],
        // 3: [enemiesGroups['weak-enemy'],enemiesGroups['medium-enemy']],
        // 4: [enemiesGroups['medium-enemy'],enemiesGroups['medium-enemy']],
        // 5: [enemiesGroups['medium-enemy'],enemiesGroups['medium-enemy'],enemiesGroups['weak-enemy']],
        // 6: [enemiesGroups['strong-enemy'],enemiesGroups['medium-enemy']],
        // 7: [enemiesGroups['strong-enemy'],enemiesGroups['strong-enemy']],
        // 8: [enemiesGroups['strong-enemy'],enemiesGroups['strong-enemy'],enemiesGroups['medium-enemy']],
        // 9: [enemiesGroups['elite-enemy']],
    };

    var enemyMap = {
        "enemy-counts": [{
            count: 1,
            probability: 4
        }, {
            count: 2,
            probability: 2
        }, {
            count: 1,
            probability: 1
        }],
        "weak-enemy": {
            minimumLevel: 1,
        }
    };



    this.getEnemiesForLevel = function(level) {
        var count = enemyMap['enemy-counts'].reduce(function(a, b) {
            if (Math.random() * a.probability > Math.random() * b.probability) {
                return a;
            } else {
                return b;
            }
        }).count;
        // });

        while (count--) {

        }
        console.log("Enemeis for level?",maps[1][0]);

        var map = enemiesGroups['weak-enemy'];
        var enemy = map.reduce(function(a, b) {
            if (Math.random() * a.probability > Math.random() * b.probability) {
                return a;
            } else {
                return b;
            }
        }).enemy;

        
        return [enemy];
    }
})
