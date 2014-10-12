var defaults = {
	ai : {
		conditions: [{
			name:"If an enemy's life is less than 10 percent",
			effect: function(game, self){
				var target = game.enemies.find(function(enemy){
					if (enemy.health < enemy.maxHealth / 10) {
						return true;
					}
				})

				return target;
			}},
			name:"If your life is less than 10 percent",
			effect: function(game, self){
				if (self.health < self.maxHealth / 10) {
					return true;
				}
			}}],
		effects: [{
			name: "attack",
			effect:function(target){
				console.log("I'm attacking ", target, "!");
			}
		}]

	}
}