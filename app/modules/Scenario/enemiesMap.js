angular.module("EliteBattleArena.Scenario")


.service("enemiesMap", function(enemiesGroups, gamble, Actor,Item,treasureService,foes) {

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

        var count = enemyCounts.reduce(gamble).count;

        var enemies = [];

        if (level==9) {
            return [new Actor(foes.insidiousBeing)]
        }

    
        var probabilities = [
            {
                group:'weak-enemy',
                probability: (level < 3) ? 3 - level : 0,
            },{
                group:'medium-enemy',
                probability: (level < 9) ? level - 5 : 0,
            },
            {
                group:'strong-enemy',
                probability: level - 7,
            },
        ];

        while (count--) {
            var group = probabilities.reduce(gamble).group;
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
