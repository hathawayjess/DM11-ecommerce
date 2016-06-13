var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongo = require('mongojs');
var productCtrl = require('./controllers/productCtrl');

var app = express();
var db = mongo("ecommerce", ["products"]);

//USE
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));


//ENDPOINTS

//POST
app.post('/api/products', productCtrl.addProducts);


//GET
app.get('/api/products', productCtrl.getProducts);
app.get('/api/products/:id', productCtrl.getProductById);


//PUT
app.put('/api/products/:id', productCtrl.changeProduct);


//DELETE
app.delete('/api/products/:id', productCtrl.deleteProduct);





app.listen(3000, function(){
  console.log('listening on port ' + 3000);
});
