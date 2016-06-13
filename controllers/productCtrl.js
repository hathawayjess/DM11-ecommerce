var mongo = require('mongojs');
var db = mongo("ecommerce", ["products"]);

module.exports = {

	addProducts: function(req, res, next) {
		db.products.save(req.body, function(error, response){
        if(error) {
            return res.status(500).json(error);
        } else {
            return res.json(response);
        }
    });
	},
	getProducts: function(req, res, next) {
		var query = req.query;
    	db.products.find(query, function(err, response){
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
	},
	getProductById: function(req, res, next) {
		var idObj = {
        _id: mongo.ObjectId(req.params.id)
    	};
    	db.products.findOne(idObj, function(err, response){
        if(err) {
            res.status(500).json(err);
        } else {
            res.json(response);
        }
    });
	},
	changeProduct: function(req, res, next) {
		console.log(req.params)
		console.log(req.body)

		if(!req.params.id){
        	return res.status(400).send('id query needed');
 	    }

	   	var query = {
	        _id: mongo.ObjectId(req.params.id)
	    };

	    db.products.update(query, req.body, function(error, response){
	        if(error) {
	            return res.status(500).json(error);
	        } else {
	            return res.json(response);
	        }
    });
	},
	deleteProduct: function(req, res, next) {
		console.log(req.params)
		 if(!req.params.id){
  		  return res.status(400).send('id query needed');
 		 }
		 var query = {
		   _id: mongo.ObjectId(req.params.id)
		 };
		 db.products.remove(query, function(error, response){
		   if(error){
		     return res.status(500).json(error);
		   } else {
		     return res.json(response);
		   }
		 });
		}
		

	}