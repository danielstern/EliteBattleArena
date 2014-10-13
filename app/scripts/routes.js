angular.module("Game.EliteBattleArena")
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state({
                name: "main",
                abstract: true,
                url: "/main",
                templateUrl: 'partial/main.html',
            })
            .state({
                name: "splash.instructions",
                url: "instructions",
                views: {
                    detail: {
                        templateUrl: "partial/instructions.html"
                    }
                }
            })

        .state({
            name: "main.dungeon",
            url: "^/dungeon",
            views: {
                game: {
                    templateUrl: "partial/dungeon.html",
                    controller: "FloorController"
                }
            }
        })

        .state({
            name: "main.dungeon.floor",
            url: "^/dungeon/:floor",
            views: {
                floor: {
                    templateUrl: "partial/floor.html",
                    controller: "BattleController"
                }
            }
        })

        .state({
            name: "main.status",
            url: "^/status",
            views: {
                game: {
                    templateUrl: "partial/status.html",
                    controller: "StatusController"
                }
            }
        })

        .state({
            name: "main.status.character",
            url: "/character",
            views: {
                main: {
                    templateUrl: "partial/hero-stat-view.html",

                }
            }
        })

        .state({
            name: "main.status.store",
            url: "^/store",
            views: {
                main: {
                    templateUrl: "partial/store.html",
                    controller: "StoreController"
                }
            }
        })

        .state({
            name: "main.status.inventory",
            url: "^/inventory",
            views: {
                main: {
                    templateUrl: "partial/inventory.html",
                    controller: "InventoryController"
                }
            }
        })

        $stateProvider.state({
            name: "splash",
            url: "/",
            templateUrl: "partial/splash.html",

        });
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/');
    })
