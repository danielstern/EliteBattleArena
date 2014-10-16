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

    $stateProvider.state({
        name: "splash",
        url: "/",
        templateUrl: "partial/splash.html",

    });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
})
