angular.module('ecommerce')
	.controller('adminCtrl', function( $scope, productSvc, getAllProductsAdmin ) {

		$scope.products = getAllProductsAdmin;

		$scope.addProduct = function( product ) {
			productSvc.createProduct(product)
				.then(function(response) {
					$scope.prod.title = '';
					$scope.prod.color = '';
				})
		}

		$scope.editProduct = function( product ) {
			productSvc.createProduct(product)
				.then(function(response) {
					console.log(response)
				})
		}

		$scope.deleteProduct = function( product ) {
			productSvc.deleteProduct(product._id)
				.then(function(response) {
					$scope.products.splice(product, 1)
				})
		}

		$scope.edit = false;

	})