angular.module('ecommerce')
	.service('productSvc', function( $http ) {

		this.getProducts = function() {
			return $http.get('/api/products')
					.then(function(response) {
						return response.data;
					})
		}

		this.createProduct = function( product ) {
			return $http.post('/api/products', product)
		}

		this.updateProduct = function( product ) {
			return $http.put('/api/products', product)
		}

		this.deleteProduct = function ( productId ) {
			return $http.delete('/api/products/' + productId)
		}

	})