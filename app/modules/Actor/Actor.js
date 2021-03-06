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
            this.exp = options.exp || 0;
            this.body = options.body || "hero";
            this.speed = options.speed || 2.5;
            this.sp = 0;
            // this.equip = options.equip || {};
            this.treasureClass = options.treasureClass;

            this.equip = {
                armor:options.armor,
                weapon:options.weapon,
                helmet:options.helmet,
                shield:options.shield,
            }

            this.equipItem = function(item) {
                var oldItem;
                if (!item.location) {
                    return;
                }
                if (this.equip[item.location]) {
                    oldItem = this.equip[item.location];
                }

                this.equip[item.location] = item;
                return oldItem;
            }

            this.unequipItem = function(item) {
                item.equipped = false;
                this.equip[item.location] = undefined;
                return item;
            }

            this.getAttack = function() {
                var attack = 0;
                attack += +this.attack;
                if (this.equip.weapon) {
                    // console.log("Weapon?",this.equip.weapon)
                    attack += +this.equip.weapon.attack;
                };

                return attack;
            };

            this.onDealDamage = function(target, actor, damage) {
                console.log("On deal damage", arguments);
                for (key in this.equip) {
                    var equip = this.equip[key];
                    if (equip && equip.bonus && equip.bonus.onDealDamage) {
                        equip.bonus.onDealDamage(target, actor, damage);
                    }
                }
            };

            this.getHealPerCycle = function() {
                var heal = 0;
                for (key in this.equip) {
                    var equip = this.equip[key];
                    if (equip && equip.bonus) {
                        if (equip.bonus.heal) {
                            heal += equip.bonus.heal;
                        }
                    }
                }

                return heal;
            }

            this.getSpeed = function() {
                var speed = this.speed;
                for (key in this.equip) {
                    var equip = this.equip[key];
                    if (equip && equip.bonus) {
                        if (equip.bonus.speed) {
                            speed += equip.bonus.speed;
                        }
                    }
                }

                return speed;
            }

            this.getDrain = function() {
                var drain = 0;
                for (key in this.equip) {
                    var equip = this.equip[key];
                    if (equip && equip.bonus) {
                        if (equip.bonus.drain) {
                            drain += equip.bonus.drain;
                        }
                    }
                }

                return drain;
            }



            this.getDefense = function() {
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
