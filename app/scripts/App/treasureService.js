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
            }]
        }
        this.getTreasures = function(lvl) {
            var rewards = [];
            console.log("Rolling treasure this man times...",lvl);
            while (lvl) {
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
            };


            return rewards;
        }
    })
