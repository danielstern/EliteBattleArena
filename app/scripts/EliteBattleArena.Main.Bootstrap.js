angular.module("Game.EliteBattleArena", ['EliteBattleArena', 'ui.router'])
    .run(function($rootScope, Game,Actor) {
        var game = new Game();
        $rootScope.game = game;

        var hero = new Actor({
            name: "Friendus Fortunato",
            side: "good",
            body: "hero",
        });

        game.storeItems = [{
            name:"Helmet of Strenth",
            description:"A stout helmet. Increases health by 20",
            cost: 200,
            location: "head",
            appearance:"helm-fancy"
        }]

        game.inventory = [{
            name:"Common Skullcap",
            description:"It's quite common.",
            location: 'head',
            appearance:"helm-basic"
        }]

        game.party.push(hero);

        hero.equip.body = {
        	name: "Shoddy Armor",
        	defense: 3
        };

        hero.equip.weapon = {
        	weapon: "Puny Spear",
        	attack: 4
        }

        game.gold = 420;

    });
