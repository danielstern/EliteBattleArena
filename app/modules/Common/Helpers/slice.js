angular.module("EliteBattleArena.Helpers")
.filter('slice', function() {
    return function(start, arr, end) {
        return (arr || []).slice(start, end);
    };
})
.filter('latest', function() {
    return function(arr, start, end) {
    	// console.log("lootest",start,arr)
        return (arr || []).reverse().slice(0,5);
    };
})