angular.module("EliteBattleArena.Helpers")
.filter('alignment', function() {
    return function(array, alignment) {
        if (!array) return;
        return array.filter(function(hero) {
            return hero.side === alignment;
        })
    };
})
