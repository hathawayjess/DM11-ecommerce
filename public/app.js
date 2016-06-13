angular.module("ecommerce", ['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
	  $stateProvider
	  .state('home',{
	    url:'/',
	    controller: 'homeCtrl',
	    templateUrl: "./views/homeTemp.html",
	    resolve: {
	    	getAllProducts: function( productSvc ) {
	    		return productSvc.getProducts()
	    	}
	    }
	  })
	  .state('admin', {
	  	url:'/admin',
	  	controller:'adminCtrl',
	  	templateUrl: "./views/adminTemp.html",
	  	resolve: {
	    	getAllProductsAdmin: function( productSvc ) {
	    		return productSvc.getProducts()
	    	}
	    }
	  })
	  $urlRouterProvider.otherwise('/home');
	})