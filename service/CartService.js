'use strict';


/**
 * Finds a cart
 * Get a cart from the system
 *
 * userId String The id of the user of the cart to retrieve
 * returns Cart
 **/
exports.cartGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "userId" : 0,
  "books" : [ 0, 1, 2 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds a cart by ID
 *
 * id Integer ID of the cart to get
 * returns Cart
 **/
exports.cartIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0,
  "userId" : 0,
  "books" : [ 0, 1, 2 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a cart in the store with form data
 *
 * id Long ID of cart that needs to be updated
 * books List Updated array of books in the cart
 * no response value expected for this operation
 **/
exports.cartIdPUT = function(id,books) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

