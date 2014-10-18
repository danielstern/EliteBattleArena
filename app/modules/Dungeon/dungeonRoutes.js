angular.module("EliteBattleArena.Dungeon")

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state({
        name: "main.dungeon",
        url: "^/dungeon",
        views: {
            game: {
                templateUrl: "modules/Dungeon/dungeon.html",
            }
        }
    })

    .state({
        name: "main.dungeon.select",
        url: "/select",
        views: {
            floor: {
                templateUrl: "modules/Dungeon/dungeon-select.html",
                controller: "DungeonController"
            }
        }
    })


    .state({
        name: "main.dungeon.floor",
        url: "^/dungeon/:floor",
        views: {
            floor: {
                templateUrl: function($stateParams) {
                    var url = "modules/Scenario/floors/floor-" + $stateParams.floor + ".html";
                    return url;
                },
                controller: "FloorController"
            }
        }
    })


})
