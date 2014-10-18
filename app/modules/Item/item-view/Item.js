angular.module("EliteBattleArena.Item")

.factory("Item", function() {

    return function(options) {
        options = options || {};
        options.bonus = options.bonus || {};

        this.id = Math.ceil(Math.random() * 100000);
        this.name = options.name;
        this.description = options.description;
        this.cost = options.cost;
        this.canBuy = options.canBuy;
        this.location = options.location;
        this.attack = options.attack;
        this.defense = options.defense;
        this.appearance = options.appearance;
        this.bonus = {
            heal: options.bonus.heal,
            speed: options.bonus.speed,
        }

    }

});
