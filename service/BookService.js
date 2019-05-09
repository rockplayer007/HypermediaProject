'use strict';

let sqlDb;

exports.booksDbSetup = function(database) {
  sqlDb = database;
  return database.schema.hasTable("books").then(exists => {
    if (!exists) {
      //console.log("It doesn't so we create it");
      return database.schema.createTable("books", table => {
        //table.increments();
        table.increments("id").primary();
        table.string("title");
        table.integer("authorId");
        table.decimal("price");
        table.string("isbn");
        table.integer("quantity");
        table.string("genre");
        table.integer("event");
        table.text("description");
        table.string("publisher");
        table.string("language");
        table.date("date");

        table.foreign("authorId").references("authors.id");
        table.foreign("event").references("events.id");

      });
    }
    else{
        //console.log("table already exists");
    }
  });
};



/**
 * Find book with the book's id
 *
 * id Long id of the book you are searching
 * returns Book
 **/
exports.bookIdGET = function(id) {
  return sqlDb
      .from('books')
      .select()
      .where({ id: id })
      .then(data => {
        return data
      });
}





/**
 * Books availble in the store
 * List of books available in the inventory
 *
 * returns List
 **/
exports.booksGET = function() {
  return sqlDb("books")
    .then(data => {
      return data
    });
};


/**
 * Get the author of a book
 *
 * id Long id of the book you want the author of
 * returns Author
 **/
exports.booksIdAuthorGET = function(id) {
  return sqlDb
      .from("authors")
      .select()
      .where("id", id)
      .then(data => {
        return data
      });
};



/**
 * Get the event of a book
 *
 * id Long id of the book you want the event of
 * returns Event
 **/
exports.booksIdEventGET = function(id) {
  return sqlDb
      .from("events")
      .select()
      .where("id", id)
      .then(data => {
        return data
      });
}