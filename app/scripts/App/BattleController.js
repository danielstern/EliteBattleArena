angular.module("EliteBattleArena.App")
    .controller("BattleController", function($scope, $stateParams, treasureService, Actor, levelsMap, Battle,enemiesMap,foes) {
        var battle = new Battle();

        $scope.battle = battle;

        var level = $stateParams.floor;

        var enemies = enemiesMap[level];
        var levelMap = levelsMap[level];

        enemies.forEach(function(enemy) {
            battle.actors.push(new Actor(enemy));
        })

        $scope.game.party.forEach(function(hero) {
            battle.actors.push(hero);
            hero.heals = 1;
        })

        $scope.startBattle = function() {
            $scope.isFighting = true;
            $scope.fightStarted = true;
            $scope.battle.start();
        }

        $scope.$watch(function() {
            return $scope.battle.victory;
        }, function(val) {
            if (val === true) {
                battle.stop();
                var treasures = treasureService.getTreasures(level);
                $scope.treasures = treasures;
                treasures.forEach(function(treasure) {
                    if (treasure.gold) {
                        $scope.game.gold += treasure.value;
                    } else {
                        console.log("Pushing to inventory...",treasure);
                        $scope.game.inventory.push(treasure);
                    }
                });
                $scope.isFighting = false;

                console.log("Setting max dungeon level...",level,$scope.game.maxDungeonLevel);
                if (level+1 > $scope.game.maxDungeonLevel) {
                    $scope.game.maxDungeonLevel = +level + 1;
                }
                $scope.isVictory = true;
            } else if (val === false) {
                battle.stop();
                $scope.game.gold /= 2;
                $scope.isDefeat = true;
                $scope.isFighting = false;
            }
        })
    })
