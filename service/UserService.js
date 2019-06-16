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
 * Adds a book to the user's cart
 *
 * userEmail String Email of the user that wants a book
 * books Long id of the book that the user wants
 * no response value expected for this operation
 **/
exports.userBookPUT = function(userEmail,books) {

    function checkBookInDb (sqlDb,book, user){
        return sqlDb("cart")
            .where({userEmail: user,
                    bookId : book})
            .then(data =>{
                if(data.length === 0){
                    return 0;
                }
                else{
                    return data[0].quantity;
                }

        });
    }


    return checkBookInDb(sqlDb, books, userEmail).then( quantity =>{
        if(quantity === 0){ //book is not it the cart
            quantity++;
            return sqlDb("cart")
                .insert({"userEmail":userEmail ,
                    "bookId": books,
                    "quantity":quantity})
                .then(() => {
                    return {"quantity": quantity};
                });
        }
        else{
            quantity++;
            return sqlDb("cart")
                .where({"userEmail":userEmail ,
                    "bookId": books})
                .update({"quantity":quantity})
                .then(() => {
                    return {"quantity": quantity};
                });
        }
    });



};



/**
 * get all users of the system
 *
 * returns List
 **/
/*
exports.userGET = function() {
  return sqlDb("users")
      .then(data => {
        return data
      });
}

 */

/**
 * Login
 * Login with a form
 *
 * email String
 * password String
 * no response value expected for this operation
 **/
exports.userLoginPOST = function(email,password) {
    return sqlDb('users')
        .where({ email: email})
        .then((data) => {
            return data;
        });
};


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
};


/**
 * Logged user
 * Gives the currently logged user
 *
 * no response value expected for this operation
 **/
exports.userIsLoggedGET = function() {
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
                return true;
              });
        }
        else{
          return false;
        }

      });



}


/**
 * Get the cart of an user
 *
 * id Long id of the user to get the cart from
 * returns Cart
 **/
exports.usersIdCartGET = function(id) {

    return sqlDb('cart')
        .where({ userEmail: id})
        .then((data) => {
            return data;
        });

};


/**
 * Delete the cart of an user
 *
 * id String id of the user to delte the cart from
 * no response value expected for this operation
 **/
exports.usersIdCartDELETE = function(id) {

    return sqlDb
        .from("cart")
        .where({"userEmail" : id})
        .del()
        .then(data => {return data});

};



/**
 * Decrease the quantity of the given
 *
 * id Long id of the book to decrease the qunatity
 * no response value expected for this operation
 **/
exports.usersIdCartBookDELETE = function(userEmail, bookId) {

    function checkBookInDb (sqlDb,book, user){
        return sqlDb("cart")
            .where({userEmail: user,
                bookId : book})
            .then(data =>{
                return data[0].quantity;
            });
    }


    return checkBookInDb(sqlDb, bookId, userEmail).then( quantity =>{
        if(quantity === 1){ //delete book

            return sqlDb("cart")
                .where({userEmail: userEmail,
                    bookId : bookId})
                .del()
                .then(() => {
                    return {"quantity": 0}
                });
        }
        else{
            quantity--;
            return sqlDb("cart")
                .where({"userEmail":userEmail ,
                    "bookId": bookId})
                .update({"quantity":quantity})
                .then(() => {
                    return {"quantity": quantity};
                });
        }
    });

};

