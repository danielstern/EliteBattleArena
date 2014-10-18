angular.module("EliteBattleArena.Floor")
    .controller("FloorController", function($scope, $stateParams, Item, musicSounds, battleSounds, treasureService, Actor, levelsMap, BattleEngine,enemiesMap,foes) {
        var battle = new BattleEngine();


        $scope.battle = battle;

        var level = $stateParams.floor;
        
        $scope.game.currentDungeonLevel = level;

        var enemies = enemiesMap.getEnemiesForLevel(level);

        var levelMap = levelsMap[level];

        battle.on("attack",battleSounds.swing);
        battle.on("block",battleSounds.block);
        battle.on("hit",battleSounds.hit);

        console.log("Enemies?",enemies);

        enemies.forEach(function(enemy) {
            battle.actors.push(enemy);
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
                $scope.treasures = enemies.map(function(enemy){
                    return treasureService.getTreasures(enemy.treasureClass,level);
                })
                // console.log("Scope treasures?",$scope.treasures)
                $scope.treasures.forEach(function(treasure) {
                    if (!treasure) return;
                    if (treasure.gold) {
                        $scope.game.gold += treasure.value;
                    } else {
                        $scope.game.inventory.push(new Item(treasure));
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
