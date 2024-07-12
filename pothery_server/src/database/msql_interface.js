const mysql = require("mysql2");
var connection;

module.exports = {
	connect,
	query
};

/* public code */

function connect() {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root",
		database: "pothery",
	});
}

function query(sql, params) {
	return new Promise(function (resolve, reject) {
		connection.execute(sql, params, function (err, result, fields) {
			if (err) reject(err);
			resolve(result);
		});
	});
}