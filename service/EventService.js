'use strict';


let sqlDb;

exports.eventsDbSetup = function(database) {
  sqlDb = database;
  return database.schema.hasTable("events").then(exists => {
    if (!exists) {
      //console.log("It doesn't so we create it");
      return database.schema.createTable("events", table => {
        //table.increments();
        table.increments("id").primary();
        table.string("name");
        table.integer("bookId");
        table.date("date");
        table.string("location");
        table.text("description");

        table.foreign("bookId").references("books.id");
      });
    }
    else{
      //console.log("table already exists");
    }
  });
};


/**
 * Find event with the event's id
 *
 * id Long id of the event you are searching
 * returns Event
 **/
exports.eventIdGET = function(id) {
  return sqlDb
      .from('events')
      .select()
      .where({ id: id })
      .then(data => {
        return data
      });
}


/**
 * Events related to a book
 * List of all the events
 *
 * returns List
 **/
exports.eventsGET = function() {

  return sqlDb("events")
      .then(data => {
        return data
      });
}


/**
 * Get the book of an event
 *
 * id Long id of the event you want the book of
 * returns Book
 **/
exports.eventsIdBookGET = function(id) {
  return sqlDb
      .from("books")
      .where("id", id)
      .then(data => {
          return data
      });


};

