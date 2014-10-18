angular.module("EliteBattleArena.Game")
    .factory("Game", function(Actor, party, weapons, armor, Item) {
        return function() {
            var game = this;
            this.party = [];
            this.inventory = [];
            this.currentDungeonLevel = 1;
            this.maxDungeonLevel = 1;
            this.gold = 0;

            // settings
            this.musicVolume = 0.3;
            this.soundVolume = 0.3;

            this.store = []

            var TEST_MODE = false;

            if (TEST_MODE) {
                game.inventory.push(armor.revitalizingPlate);
                game.inventory.push(weapons.levantineSword);
                game.maxDungeonLevel = 10;
                game.gold = 10000;
            }

            game.party.push(new Actor(party[0]));
            game.totalDungeonLevels = 9;

            for (var key in weapons) {
                if (weapons[key].canBuy) {
                    game.store.push(new Item(weapons[key]));
                }
            }

            for (var key in armor) {
                if (armor[key].canBuy) {
                    game.store.push(new Item(armor[key]));
                }
            }

            game.gold += 100;
        }

    })
