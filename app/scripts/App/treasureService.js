angular.module("EliteBattleArena.App")
    .service("treasureService", function(armor, weapons) {
        var treasuresMap = {
            1: [{
                reward: "nothing",
                probability: 5,
            }, {
                reward: "gold",
                probability: 5,
            }, {
                reward: weapons.cheapDagger,
                probability: 1,
            }],
            2: [{
                reward: "nothing",
                probability: 95,
            }, {
                reward: armor.shoddyArmor,
                probability: 5,
            }, {
                reward: weapons.ironDagger,
                probability: 1,
            }],
            3: [{
                reward: "nothing",
                probability: 400,
            }, {
                reward: armor.roughShield,
                probability: 20,
            }, {
                reward: weapons.trustyCrowbar,
                probability: 1,
            }],
            4: [{
                reward: "gold",
                probability: 62,
            },{
                reward: "nothing",
                probability: 75,
            }, {
                reward: armor.commonSkullCap,
                probability: 5,
            }, {
                reward: weapons.handsomeBreastplate,
                probability: 1,
            }],
            5: [{
                reward: "gold",
                probability: 92,
            },{
                reward: "nothing",
                probability: 75,
            }, {
                reward: armor.swarthyBuckler,
                probability: 5,
            }, {
                reward: weapons.steelHammer,
                probability: 1,
            }],
            6: [{
                reward: "gold",
                probability: 215,
            },{
                reward: "nothing",
                probability: 82,
            }, {
                reward: armor.superiorHelm,
                probability: 4,
            }, {
                reward: weapons.swordOfValor,
                probability: 1,
            }],
            7: [{
                reward: "gold",
                probability: 199,
            },{
                reward: "nothing",
                probability: 66,
            }, {
                reward: weapons.steelHammer,
                probability: 4,
            }, {
                reward: armor.dashingMail,
                probability: 1,
            }],
            8: [{
                reward: "gold",
                probability: 215,
            },{
                reward: "nothing",
                probability: 82,
            }, {
                reward: weapons.swordOfValor,
                probability: 4,
            }, {
                reward: armor.helmetOfStrength,
                probability: 1,
            }],
            9: [{
                reward: weapons.swordOfValor,
                probability: 400,
            },{
                reward: "nothing",
                probability: 5,
            }]
        }
        this.getTreasures = function(lvl) {
            var rewards = [];
            console.log("Rolling treasure this man times...",lvl);
            var max = 5;
            while (lvl&&max) {
                var treasure = treasuresMap[lvl].reduce(function(a, b) {
                    if (Math.random() * a.probability > Math.random() * b.probability) {
                        return a;
                    } else {
                        return b;
                    }
                });

                console.log("Rolled reward...", treasure);

                if (treasure.reward === "gold") {
                    var value = Math.floor(Math.random() * lvl * 75);
                    treasure = {
                        reward: {
                            value: value,
                            name: value + " gold.",
                            gold: true
                        }
                    };
                }


                if (treasure.reward !== "nothing") rewards.push(treasure.reward);
                lvl--;
                max--;
            };


            return rewards;
        }
    })
