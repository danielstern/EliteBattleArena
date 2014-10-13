angular.module("EliteBattleArena.Actor")
.factory("Actor", function(getRandomMove) {

    return function(options) {

        options = options || {};
        options.equip = options.equip || {};

        this.id = Math.ceil(Math.random() * 100000),
        this.name = options.name || this.id;
        this.act = getRandomMove;
        this.side = options.side;
        this.health = options.health || 100;
        this.maxHealth = options.health || 100;
        this.attack = options.attack || 10;
        this.defending = false;
        this.exp = 0;
        this.body = options.body || "hero";
        this.speed = options.speed || 2.5;
        this.sp = 0;
        this.equip = options.equip;

        this.getAttack = function() {
            var attack = 0;
            attack+= this.attack;
            if (this.equip.weapon) {
                attack+= this.equip.weapon.attack;
            };

            return attack;
        }

        this.getDefense = function(){
            var defense = 0;
            if (this.equip.head) {
                defense += this.equip.head.defense;
            }

            if (this.equip.body) {
                defense += this.equip.body.defense;
            }

            if (this.equip.armor) {
                defense += this.equip.armor.defense;
            }

            if (this.equip.shield) {
                defense += this.equip.shield.defense;
            }

            return defense;
        }

    }
})
