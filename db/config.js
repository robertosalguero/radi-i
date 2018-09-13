const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
	// custom database name
	database: 'radi-i_development', 
	port: 5432,
	host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
	// Heroku will add this
	db = pgp(process.env.DATABASE_URL); 
}

module.exports = db;