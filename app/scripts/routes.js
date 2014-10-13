angular.module("Game.EliteBattleArena")
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state({
        name:"main",
        abstract:true,
        url:"/main",
        templateUrl:'partial/main.html',
    })
    .state({
        name:"splash.instructions",
        url:"instructions",
        views: {
            detail: {
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
                controller:function($state,$scope){
                    $state.go('main.dungeon.floor',{floor:$scope.game.currentDungeonLevel});
                }
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
                    // $scope.
                }
            }
        }

    })
    
    $stateProvider.state({
        name:"splash",
        url:"/",
        templateUrl:"partial/splash.html",
        
    });
     $urlRouterProvider.when('', '/');
     $urlRouterProvider.otherwise('/');
})
