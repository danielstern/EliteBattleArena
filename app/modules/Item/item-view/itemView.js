angular.module("EliteBattleArena.Item")
.directive("itemView",function(){
    return {
        templateUrl: "modules/Item/item-view/item-view.html",
        scope: {
        	item: "=",
        	compact:"="
        },
        restrict:"AE",
    }
})
.factory("Item",function(){
    return function(options){
    	options = options || {};
    	options.bonus = options.bonus || {};

    	this.id = Math.ceil(Math.random() * 100000);
    	this.name = options.name;
    	this.description = options.description;
    	this.cost = options.cost;
    	this.canBuy = options.canBuy;
    	this.location = options.location;
    	this.defense = options.defense;
    	this.appearance = options.appearance;
    	this.bonus = {
    	    heal:options.bonus.heal,
    	    speed:options.bonus.speed,
    	}
        
    }
})