const sqlDbFactory = require("knex");

let { booksDbSetup } = require("./BookService");
let { authorsDbSetup } = require("./AuthorService");
let { eventsDbSetup } = require("./EventService");
let { usersDbSetup } = require("./UserService");

let sqlDb = sqlDbFactory({
  client: "pg",
  connection: "postgres://sblrblscxcwgzd:566feadcca87ac4674c9e0104276a3737e2cbab67fa2243e12cb4f54ae0956f9@ec2-54-246-92-116.eu-west-1.compute.amazonaws.com:5432/d82bvo13n4heii?ssl=true",
  //connection: "postgres://postgres:admin@localhost:5432/postgres",
  //connection: process.env.DATABASE_URL,
  ssl: true,
  debug: true
});
//console.log(process.env.DATABASE_URL);


function setupDataLayer() {
   return authorsDbSetup(sqlDb)
       .then(() => booksDbSetup(sqlDb)
           .then(() => eventsDbSetup(sqlDb)
               .then(() => usersDbSetup(sqlDb))));
  //return booksDbSetup(sqlDb);
}

module.exports = { database: sqlDb, setupDataLayer };