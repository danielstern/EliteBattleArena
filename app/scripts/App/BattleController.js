angular.module("EliteBattleArena.App")
    .controller("BattleController", function($scope, Actor, Battle) {
        var battle = new Battle();

        $scope.battle = battle;

        var commonTroll = {
            name: "Common Troll",
            side: "evil",
            body: "villain",
            health: 25,
            speed: 3
        };

        var deadlyTroll = {
            name: "Deadly Troll",
            side: "evil",
            body: "villain",
            health: 35,
            attack: 12,
            speed: 3
        };

        var enemiesMap = {
            1: [new Actor(commonTroll)],
            2: [new Actor(commonTroll),new Actor(commonTroll)],
            3: [new Actor(commonTroll),new Actor(deadlyTroll)],
        }

        var enemies = enemiesMap[$scope.game.currentDungeonLevel];

        enemies.forEach(function(enemy) {
            battle.actors.push(enemy);
        })

        $scope.game.party.forEach(function(hero) {
            battle.actors.push(hero);
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
                var treasures = [ /*soon*/ ];
                $scope.treasures = treasures;
                treasures.forEach(function(treasure) {
                    $scope.inventory.push(treasure);
                });
                $scope.isFighting = false;
                $scope.game.currentDungeonLevel++
                    $scope.game.maxDungeonLevel = $scope.game.currentDungeonLevel;
                $scope.isVictory = true;
            } else if (val === false) {
                battle.stop();
                $scope.game.gold /= 2;
                $scope.isDefeat = true;
                $scope.isFighting = false;
            }
        })

        // battle.actors.push(badGuy2);
    })
