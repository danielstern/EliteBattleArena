angular.module("EliteBattleArena.Treasure")
    .service("treasureService", function(armor, weapons,treasuresMap) {
       
        this.getTreasures = function(lvl) {
            var rewards = [];
            var max = 5;
            while (lvl&&max) {
                var treasure = treasuresMap[lvl].reduce(function(a, b) {
                    if (Math.random() * a.probability > Math.random() * b.probability) {
                        return a;
                    } else {
                        return b;
                    }
                });

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
