const promise = require('pg-promise')();
const db = promise({
		user: 'postgres', 
		password: '',
		host: 'localhost',
		port: 5432,
		database:'unichristus'
});


module.exports = db;
