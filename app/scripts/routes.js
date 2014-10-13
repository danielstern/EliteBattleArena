angular.module("Game.EliteBattleArena")
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name:"main",
        url:"/main",
        templateUrl:'partial/main.html',
    })
    .state({
        name:"main.instructions",
        url:"^/instructions",
        views: {
            game: {
                templateUrl:"partial/instructions.html"
                
            }
        }

    })
    
    .state({
        name:"main.dungeon",
        url:"^/dungeon",
        views: {
            game: {
                templateUrl:"partial/dungeon.html",
            }
        }
    })

    .state({
        name:"main.dungeon.floor",
        url:"^/dungeon/:floor",
        views: {
            floor: {
                templateUrl:"partial/floor.html",
                controller:"BattleController"
            }
        }
    })

    .state({
        name:"main.status",
        url:"^/status",
        views: {
            game: {
                templateUrl:"partial/status.html",
                controller: function($scope){
                    $scope.actor = $scope.game.party[0];
                }
            }
        }

    })
    
    $stateProvider.state({
        name:"splash",
        url:"/splash",
        templateUrl:'partial/splash.html'
    });
     $urlRouterProvider.when('', '/instructions');
})
