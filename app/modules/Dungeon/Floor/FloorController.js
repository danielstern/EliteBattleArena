angular.module("EliteBattleArena.Floor")
    .controller("FloorController", function($scope, $stateParams, musicSounds, battleSounds, treasureService, Actor, levelsMap, BattleEngine,enemiesMap,foes) {
        var battle = new BattleEngine();

        $scope.battle = battle;

        var level = $stateParams.floor;

        var enemiesMap = enemiesMap[level];
        console.log("enemies map?",enemiesMap,level);
        var enemies = enemiesMap.map(function(enemyChances){
            console.log("rolling",enemyChances);
            return enemyChances.reduce(function(a, b) {
                if (Math.random() * a.probability > Math.random() * b.probability) {
                    return a;
                } else {
                    return b;
                }
            }).enemy;

        });
        // console.log("Enemies?",enemies);
        var levelMap = levelsMap[level];

        battle.on("attack",battleSounds.swing);
        battle.on("block",battleSounds.block);
        battle.on("hit",battleSounds.hit);

        enemies.forEach(function(enemy) {
            battle.actors.push(new Actor(enemy));
        })

        $scope.game.party.forEach(function(hero) {
            battle.actors.push(hero);
            hero.heals = 1;
            hero.selectedAction = undefined;
            hero.animation = "nothing";
        })

        $scope.startBattle = function() {
            $scope.isFighting = true;
            $scope.fightStarted = true;
            $scope.battle.start();
            musicSounds.battle();
        }

        $scope.$watch(function() {
            return $scope.battle.victory;
        }, function(val) {
            if (val === true) {
                battle.stop();
                // var treasures = treasureService.getTreasures(level);
                var treasures = [];
                $scope.treasures = treasures;
                treasures.forEach(function(treasure) {
                    if (treasure.gold) {
                        $scope.game.gold += treasure.value;
                    } else {
                        $scope.game.inventory.push(treasure);
                    }
                });
                $scope.isFighting = false;

                if (level+1 > $scope.game.maxDungeonLevel) {
                    $scope.game.maxDungeonLevel = +level + 1;
                }
                $scope.isVictory = true;
                musicSounds.victory();
            } else if (val === false) {
                battle.stop();
                $scope.game.gold /= 2;
                $scope.isDefeat = true;
                $scope.isFighting = false;
            }
        })
    })
