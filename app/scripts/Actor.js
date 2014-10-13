angular.module("EliteBattleArena.Actor",[])
.factory("Actor", function(getRandomMove) {

    return function(options) {

        options = options || {};

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

    }
})
