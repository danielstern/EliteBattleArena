angular.module("EliteBattleArena.Helpers")
    .service('gamble', function() {
        return function(a, b) {
            if (Math.random() * a.probability > Math.random() * b.probability) {
                return a;
            } else {
                return b;
            }
        }
    })
