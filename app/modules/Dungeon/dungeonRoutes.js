angular.module("EliteBattleArena.Dungeon")

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state({
        name: "main.dungeon",
        url: "^/dungeon",
        views: {
            game: {
                templateUrl: "partial/dungeon.html",
                // controller: "DungeonController"
            }
        }
    })

    .state({
        name: "main.dungeon.select",
        url: "/select",
        views: {
            floor: {
                templateUrl: "partial/dungeon-select.html",
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
                    var url = "partial/floors/floor-" + $stateParams.floor + ".html";
                    console.log("Rn template url", $stateParams, url);
                    return url;
                },
                controller: "FloorController"
            }
        }
    })


})
