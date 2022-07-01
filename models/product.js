const path = require('path');
const helper = require('../helper');
const fs = require('fs');

const p = path.join(helper, 'data', 'product.json');
// Path to save and retreive data to and form the file

const getProductFromAll = (callback) => {
  fs.readFile(p, (err, content) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(content));
    }
  });
};
// Get Product from the file ( The Parsed Content ) if the File is present otherwise the " IF " Part Executes and retrun Null
// This Function is Written outside the Module Exports Because it Common for all Other function

module.exports = class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  // Constructor Function , This is used to Create A New Object by using the properties inside the Constructor function

  save() {
    this.Id = Math.random().toString();
    getProductFromAll((product) => {
      product.push(this);
      fs.writeFile(p, JSON.stringify(product), (err) => {
        console.log(err);
      });
    });
  }
  // Save the Content and Write the Data's To the Specific File That declared outside the Module Exports

  static fetchAll(callback) {
    getProductFromAll(callback);
  }
  //  To fetch All the Products from the Saved Path

  static fetchById(id, callback) {
    getProductFromAll((products) => {
      const product = products.find((p) => p.Id === id);
      callback(product);
    });
  }
  //It fetch All the Product by ( getProductFromAll ) and stored on the Products
  // Then find the Product by Comparing all ID in the ( p.id ) to the ( id ) that passed through an Argument
};
