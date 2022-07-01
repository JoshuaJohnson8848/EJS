const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('shop/product-list', {
      prods: product,
      pageTitle: 'My Shop',
      path: '/products',
    });
  });
};

exports.getProductById = (req, res, next) => {
  const prodId = req.params.Id;
  Product.fetchById(prodId, (product) => {
    // Here Req = prodId ( That passing to fetchById Function ) and res = (product) which recieves the Result after all function
    console.log(product);
    res.render('shop/product-descp', {
      product: product,
      pageTitle: 'Product Details',
      path: '/products',
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((product) => {
    res.render('shop/index', {
      prods: product,
      pageTitle: 'index',
      path: '/',
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', { pageTitle: 'cart', path: '/cart' });
};

exports.postCart = (req, res, next) => {
  const prodId = req.params.Id;
  console.log(prodId);
  res.redirect('/cart');
};
exports.getOrder = (req, res, next) => {
  res.render('shop/order', { pageTitle: 'Orders', path: '/order' });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout');
};
