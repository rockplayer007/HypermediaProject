'use strict';

let sqlDb;

exports.usersDbSetup = function(database) {
  sqlDb = database;
  return database.schema.hasTable("users").then(exists => {
    if (!exists) {
      //console.log("It doesn't so we create it");
      return database.schema.createTable("users", table => {
        //table.increments();
        table.string("email").primary();
        table.string("password");
      });
    }
    else{
      //console.log("table already exists");
    }
  });
};



/**
 * get all users of the system
 *
 * returns List
 **/
exports.userGET = function() {
  return sqlDb("users")
      .then(data => {
        return data
      });
}


/**
 * Login
 * Login with a form
 *
 * email String
 * password String
 * no response value expected for this operation
 **/
exports.userLoginPOST = function(email,password) {
  console.log("ciaoooooooooooooooooooooooooooooooooooooooooooooooooooo")
  return new Promise(function(resolve, reject) {
    resolve();
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
 * Register
 * Register into the store
 *
 * email String
 * password String
 * no response value expected for this operation
 **/
exports.userRegisterPOST = function(email,password) {

  return sqlDb('users')
      .where({ email: email })
      .then(data => {

        if(data.length === 0){

          return sqlDb('users')
              .insert(
                  {
                    email: email,
                    password: password
                  }
                  )
              .then(() => {
                return {"added": true}
              });
        }
        else{
          return {"added": false};

        }


        //return data;




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
      "userId" : 0
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find user with email
 * Returns a single user
 *
 * email String of user to get
 * returns User
 **/
exports.usersIdGET = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "email" : "harry.potter@gmail.com",
      "password" : "wingardiumleviosa"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

