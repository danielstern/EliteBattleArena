angular.module("Game.EliteBattleArena")

.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state({
            name: "main",
            abstract: true,
            url: "/main",
            templateUrl: 'modules/Splash/main.html',
        })
        .state({
            name: "splash.instructions",
            url: "instructions",
            views: {
                detail: {
                    templateUrl: "modules/Splash/instructions.html"
                }
            }
        })

    $stateProvider.state({
        name: "splash",
        url: "/",
        templateUrl: "modules/Splash/splash.html",

    });
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');
})
