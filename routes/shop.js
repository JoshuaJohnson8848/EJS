const express = require('express');
const route = express.Router();

const shopController = require('../controllers/shop');

route.get('/', shopController.getIndex);

route.get('/products', shopController.getProduct);

route.get('/products/:Id', shopController.getProductById);

route.get('/cart', shopController.getCart);

route.post('/cart', shopController.postCart);

route.get('/order', shopController.getOrder);

route.get('/checkout', shopController.getCheckout);

module.exports = route;
