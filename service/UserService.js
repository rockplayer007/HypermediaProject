'use strict';


/**
 * get all users of the system
 *
 * returns List
 **/
exports.userGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "id" : 1
}, {
  "name" : "Harry"
}, {
  "surname" : "Potter"
}, {
  "email" : "harry.potter@gmail.com"
}, {
  "password" : "wingardiumleviosa"
} ], [ {
  "id" : 1
}, {
  "name" : "Harry"
}, {
  "surname" : "Potter"
}, {
  "email" : "harry.potter@gmail.com"
}, {
  "password" : "wingardiumleviosa"
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs user into the system
 * 
 *
 * email String The email for login
 * password String The password for login in clear text
 * returns String
 **/
exports.userLoginGET = function(email,password) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.userLogoutGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a new user to the store
 *
 * body User User to add to the database
 * no response value expected for this operation
 **/
exports.userPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update an existing user
 *
 * body User User to add to the database
 * no response value expected for this operation
 **/
exports.userPUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get the cart of an user
 *
 * id Long id of the user to get the cart from
 * returns Cart
 **/
exports.usersIdCartGET = function(id) {
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
 * Find user with id
 * Returns a single user
 *
 * id Long id of user to get
 * returns User
 **/
exports.usersIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1
}, {
  "name" : "Harry"
}, {
  "surname" : "Potter"
}, {
  "email" : "harry.potter@gmail.com"
}, {
  "password" : "wingardiumleviosa"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

