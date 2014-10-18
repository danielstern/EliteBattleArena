angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(enemiesGroups, gamble, Actor,Item,treasureService,foes) {
    var maps = {
        1: enemiesGroups['weak-enemy'],
        5: enemiesGroups['medium-enemy'],
        8: enemiesGroups['strong-enemy'],
        9: enemiesGroups['elite-enemy'],
    };




    this.getEnemiesForLevel = function(level) {
        var enemyCounts = [{
                count: 1,
                probability: (level < 4) ? 2 : 0
            }, {
                count: 2,
                probability: 2
            }, {
                count: 3,
                probability: 1
            }];

        var count = enemyCounts.reduce(function(a, b) {
            if (Math.random() * a.probability > Math.random() * b.probability) {
                return a;
            } else {
                return b;
            }
        }).count;


        // });

        console.log("getting level for",level,count);

        var enemies = [];

        if (level==9) {
            return [foes.insidiousBeing]
        }

    
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
            var group = probabilities.reduce(gamble).group;
            // var map = enemiesGroups['weak-enemy'];
            var enemyProto = enemiesGroups[group].reduce(gamble).enemy;

            var enemy = new Actor(enemyProto);

            enemies.push(enemy);
        };

        enemies.forEach(function(enemy){
            var itemCount = Math.floor(2 * Math.random() * level) + Math.floor(level / 2);
            while (itemCount--) {
                var item = treasureService.getTreasures(enemy.treasureClass, level);
                if (item && item.name && !item.gold) {
                    var completeItem = new Item(item);
                    enemy.equipItem(completeItem);
                }
            }
        })

        return enemies;
    }
})
