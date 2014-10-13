angular.module("Game.EliteBattleArena", ['EliteBattleArena','ui.router'])
.run(function($rootScope,Game){
    $rootScope.game = new Game();
});