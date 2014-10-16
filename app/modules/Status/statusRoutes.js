angular.module("EliteBattleArena.Status")

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state({
	    name: "main.status",
	    url: "^/status",
	    views: {
	        game: {
	            templateUrl: "partial/status.html",
	            controller: "StatusController"
	        }
	    }
	})

	.state({
	    name: "main.status.character",
	    url: "/character",
	    views: {
	        main: {
	            templateUrl: "partial/hero-stat-view.html",

	        }
	    }
	})

	.state({
	    name: "main.status.store",
	    url: "^/store",
	    views: {
	        main: {
	            templateUrl: "partial/store.html",
	            controller: "StoreController"
	        }
	    }
	})

	.state({
	    name: "main.status.inventory",
	    url: "^/inventory",
	    views: {
	        main: {
	            templateUrl: "partial/inventory.html",
	            controller: "InventoryController"
	        }
	    }
	})

})
