angular.module("EliteBattleArena.Treasure")
    .service("treasureService", function(armor, weapons,treasuresGroups) {

        function rollForTreasure(group,lvl) {
            // console.log("Getting treasures",group);
            var treasure = treasuresGroups[group].reduce(function(a, b) {
                if (Math.random() * a.probability > Math.random() * b.probability) {
                    return a;
                } else {
                    return b;
                }
            });

            // console.log("Got treasure...",treasure);

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

            if (treasure.reward == 'nothing') {
                return undefined;
            };

            if (typeof treasure.reward == 'string') {
                return rollForTreasure(treasure.reward,lvl);
            };


            return treasure.reward;
            
        }
       
        this.getTreasures = function(group,lvl) {
            var treasure = rollForTreasure(group,lvl)
            // var rewards = [];
            // var max = 2;
            // while (lvl&&max) {

            //     if (treasure.reward !== "nothing") rewards.push(treasure.reward);

            //     lvl--;
            //     max--;    
                
            // };

            return treasure;
        }
    })
