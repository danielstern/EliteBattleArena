angular.module("EliteBattleArena.Treasure")
    .service("treasureService", function(armor, weapons,treasuresMap) {

        function rollForTreasure(group,lvl) {
            var treasure = treasuresMap[group].reduce(function(a, b) {
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

            if (typeof treasure.reward == 'string') {
                return rollForTreasure(treasure.reward,lvl);
            }
            
        }
       
        this.getTreasures = function(group,lvl) {
            var group = 'weak';
            var treasure = rollForTreasure(group,lvl)
            var rewards = [];
            var max = 5;
            while (lvl&&max) {

                if (treasure.reward !== "nothing") rewards.push(treasure.reward);

                lvl--;
                max--;    
                
            };

            return rewards;
        }
    })
