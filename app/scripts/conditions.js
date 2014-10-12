angular.module("EliteBattleArena")

.value("conditions", {
    isWeak: function(actors) {
        var targets = actors.filter(function(enemy) {
            if (enemy.health < enemy.maxHealth / 10) {
                return true;
            }
        });
        return targets;
    },
    isEvil: function(actors) {
        return actors.filter(function(actor) {
            return actor.side === "evil";
        });
    },
    isGood: function(actors) {
        return actors.filter(function(actor) {
            return actor.side === "good";
        });
    },
    isAlive: function(actors) {
        return actors.filter(function(actor) {
            return actor.health > 0;
        });
    },
})

.service("getRandomMove", function(conditions) {
        return function(game, self) {

            var targets = game.actors;
            targets = self.side === 'good' ? conditions.isEvil(targets) : conditions.isGood(targets);
            targets = conditions.isAlive(targets);
            var target = targets[0];

            if (!target) {
                console.error(self.name + " can't get target...",game);
                // return;
            }

            switch (Math.floor(Math.random() * 4)) {
                case 0:
                    return {
                        action: "nothing",
                        target: undefined,
                        actor: this,
                    };

                case 1:
                    return {
                        action: "heal",
                        target: this,
                        actor: this,
                    }
                case 2:
                    if (target) {
                        return {
                            action: "attack",
                            target: target,
                            actor: this,
                        }
                    };
                case 3:
                    return {
                        action: "defend",
                        target: this,
                        actor: this,
                    }
            }
        }
    })

    .factory("Actor", function(conditions,getRandomMove) {


        return function(options) {

            options = options || {};

            this.id = Math.ceil(Math.random() * 100000),
            this.name = options.name || this.id;
            this.act = getRandomMove;
            this.side = options.side;
            this.health = options.health || 100;
            this.attack = options.attack || 10;
            this.defending = false;


        }
    })
    .filter('slice', function() {
      return function(arr, start, end) {
        return (arr || []).slice(start, end);
      };
    })
    .directive('ngRange', function() {
        return {
            replace: true,
            restrict: 'E',
            require: 'ngModel',
            template: '<input type="range"></input>',
            link: function(scope, element, attrs, ngModel) {
                var ngRangeMin;
                var ngRangeMax;
                var ngRangeStep;
                var value;

                if (!angular.isDefined(attrs.ngRangeMin)) {
                    ngRangeMin = 0;
                } else {
                    scope.$watch(attrs.ngRangeMin, function(newValue, oldValue, scope) {
                        if (angular.isDefined(newValue)) {
                            ngRangeMin = newValue;
                            setValue();
                        }
                    });
                }
                if (!angular.isDefined(attrs.ngRangeMax)) {
                    ngRangeMax = 100;
                } else {
                    scope.$watch(attrs.ngRangeMax, function(newValue, oldValue, scope) {
                        if (angular.isDefined(newValue)) {
                            ngRangeMax = newValue;
                            setValue();
                        }
                    });
                }
                if (!angular.isDefined(attrs.ngRangeStep)) {
                    ngRangeStep = 1;
                } else {
                    scope.$watch(attrs.ngRangeStep, function(newValue, oldValue, scope) {
                        if (angular.isDefined(newValue)) {
                            ngRangeStep = newValue;
                            setValue();
                        }
                    });
                }
                if (!angular.isDefined(ngModel)) {
                    value = 50;
                } else {
                    scope.$watch(
                        function () {
                            return ngModel.$modelValue;
                        }, 
                        function(newValue, oldValue, scope) {
                            if (angular.isDefined(newValue)) {
                                value = newValue;
                                setValue();
                            }
                        }
                    );
                }

                function setValue() {
                    if (
                        angular.isDefined(ngRangeMin) &&
                        angular.isDefined(ngRangeMax) &&
                        angular.isDefined(ngRangeStep) &&
                        angular.isDefined(value)
                    ) {
                        element.attr("min", ngRangeMin);
                        element.attr("max", ngRangeMax);
                        element.attr("step", ngRangeStep);
                        element.val(value); 
                    }
                }

                function read() {
                    if (angular.isDefined(ngModel)) {
                        ngModel.$setViewValue(value);
                    }
                }

                element.on('change', function() {
                    if (angular.isDefined(value) && (value != element.val())) {
                        value = element.val();
                        scope.$apply(read);
                    }
                });
            }
        };
    });