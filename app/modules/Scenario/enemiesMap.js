angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(enemiesGroups, Actor,treasureService) {
    var maps = {
        1: enemiesGroups['weak-enemy'],
        5: enemiesGroups['medium-enemy'],
        8: enemiesGroups['strong-enemy'],
        9: enemiesGroups['elite-enemy'],
    };

    var enemyMap = {
        "enemy-counts": [{
            count: 1,
            probability: 2
        }, {
            count: 2,
            probability: 2
        }, {
            count: 1,
            probability: 1
        }],
        // "weak-enemy": {
        //     minimumLevel: 1,
        // }
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

        var enemies = [];

    
        var probabilities = [
            {
                group:'weak-enemy',
                probability: (level < 3) ? 3 - level : 0,
            },{
                group:'medium-enemy',
                probability: (level < 7) ? level - 5 : 0,
            },
            {
                group:'strong-enemy',
                probability: level - 7,
            },
        ];

        while (count--) {
            var group = probabilities.reduce(function(a, b) {
                if (Math.random() * a.probability > Math.random() * b.probability) {
                    return a;
                } else {
                    return b;
                }
            }).group;
            // var map = enemiesGroups['weak-enemy'];
            var enemyProto = enemiesGroups[group].reduce(function(a, b) {
                if (Math.random() * a.probability > Math.random() * b.probability) {
                    return a;
                } else {
                    return b;
                }
            }).enemy;

            var enemy = new Actor(enemyProto);

            enemies.push(enemy);
        };

        enemies.forEach(function(enemy){
            var itemCount = Math.floor(5 * Math.random() * level) + Math.floor(level / 2);
            while (itemCount--) {
                var item = treasureService.getTreasures(enemy.treasureClass, level);
                if (item && item.name) {
                    enemy.equipItem(item);
                }
            }
        })

        return enemies;
    }
})
