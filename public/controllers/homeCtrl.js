angular.module('ecommerce')
	.controller('homeCtrl', function( $scope, getAllProducts ) {

		$scope.products = getAllProducts;

	})