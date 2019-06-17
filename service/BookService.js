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
        table.string("field");
        table.string("theme");

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
      .orderBy('id')
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

    //needed for multiple authors
    return sqlDb
        .from("books")
        .orderBy('authors.id')
        .join('writes', 'books.id', 'writes.bookId')
        .join('authors', 'authors.id', 'writes.authorId')
        .select("authors.id", "name", "surname", "biography")
        .where("books.id", id)
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
        .from("books")
        .join('presents', 'books.id', 'presents.bookId')
        .join('events', 'events.id', 'presents.eventId')
        .select("events.id", "name", "events.bookId", "events.date", "location", "events.description")
        .where("books.id", id)
        .then(data => {
            return data
        });


};


/**
 * Get similar books to the chosen one
 *
 * id Long id of the book you want the similars of
 * returns Book
 **/
exports.booksIdSimilarGET = function(id) {

    return sqlDb
        .from("books")
        .orderBy('id')
        .where({"id" : id})
        .select("genre")
        .then(data => {
            console.log("genre is: " + data[0].genre);
            return sqlDb
                .from("books")
                .select()
                .where({"genre" : data[0].genre})
                .whereNot({"id" : id})
                .then(x => {return x})
        })


};



/**
 * Get books with a given genre
 *
 * genre Long genre of the book you want
 * returns Book
 **/
exports.booksByGenreGET = function(genre) {
    return sqlDb("books")
        .orderBy('id')
        .where({"genre" : genre})
        .then(data => {
            return data
        });
};


/**
 * Get books with a given theme
 *
 * theme Long theme of the book you want
 * returns Book
 **/
exports.booksByThemeGET = function(theme) {
    return sqlDb("books")
        .orderBy('id')
        .where({"theme" : theme})
        .then(data => {
            return data
        });
};



/**
 * Get all the themes that are present
 *
 * id Long all book themes
 * no response value expected for this operation
 **/
exports.booksThemesGET = function() {
    return sqlDb("books")
        .orderBy('id')
        .distinct("theme")
        .then(data => {
            return data
        });
};


/**
 * Get all the genres that are present
 *
 * id Long all book genres
 * no response value expected for this operation
 **/
exports.booksGenresGET = function() {
    return sqlDb("books")
        .orderBy('id')
        .distinct("genre")
        .then(data => {
            return data
        });
};