angular.module("EliteBattleArena.Status")

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state({
	    name: "main.status",
	    url: "^/status",
	    views: {
	        game: {
	            templateUrl: "modules/Status/status.html",
	            controller: "StatusController"
	        }
	    }
	})

	.state({
	    name: "main.status.character",
	    url: "/character",
	    views: {
	        main: {
	            templateUrl: "modules/Status/Party/hero-stat-view.html",

	        }
	    }
	})

	.state({
	    name: "main.status.store",
	    url: "^/store",
	    views: {
	        main: {
	            templateUrl: "modules/Store/store.html",
	            controller: "StoreController"
	        }
	    }
	})

	.state({
	    name: "main.status.inventory",
	    url: "^/inventory",
	    views: {
	        main: {
	            templateUrl: "modules/Status/Inventory/inventory.html",
	            controller: "InventoryController"
	        }
	    }
	})

})
