angular.module("Game.EliteBattleArena")
    .directive("button", function(interfaceSounds) {
        return {
            restrict: "E",
            link: function(scope, element) {
                element.click(function() {
                    interfaceSounds.click();
                })
            }
        }
    })
