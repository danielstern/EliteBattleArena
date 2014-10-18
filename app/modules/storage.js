angular.module("Game.EliteBattleArena")
    .service("storage", function(Actor,$rootScope,$state,Game) {

        if (localStorage['game']) {
            game = angular.fromJson(localStorage['game']);
            if (!game.party[0]) {
            }
            reviveGame(game);
            $rootScope.game = game;
            $state.go('main.status.inventory');
        } else {
            game = new Game();
            $rootScope.game = game;
        }

        $rootScope.$watch("game", function() {
            if (game.deleted) {
                game = new Game();
                $rootScope.game = game;
                $state.go('splash');
            }
        }, true);

        function reviveGame() {
            game.party.forEach(function(hero){
                var protoHero = new Actor();
                hero.equipItem = protoHero.equipItem.bind(hero);
                hero.unequipItem = protoHero.unequipItem.bind(hero);
                hero.onDealDamage = protoHero.onDealDamage.bind(hero);
                hero.getAttack = protoHero.getAttack.bind(hero);
                hero.getHealPerCycle = protoHero.getHealPerCycle.bind(hero);
                hero.getSpeed = protoHero.getSpeed.bind(hero);
                hero.getDefense = protoHero.getDefense.bind(hero);
            })
        }


        setInterval(function() {
            localStorage['game'] = JSON.stringify(game);
        }, 1000);
    })
