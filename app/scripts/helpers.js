angular.module("EliteBattleArena")



.filter('slice', function() {
    return function(arr, start, end) {
        return (arr || []).slice(start, end);
    };
})

.filter('alignment', function() {
    return function(array, alignment) {
        if (!array) return;
        return array.filter(function(hero) {
            return hero.side === alignment;
        })
    };
})
