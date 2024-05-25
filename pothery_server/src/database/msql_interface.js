const mysql = require('mysql2');
var connection;

module.exports = {
    connect() {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'pothery'
        });
    },

    query(sql) {
        return new Promise(function(resolve, reject) {
            connection.query(sql, function(err, result, fields) {
                if (err) reject(err);
                resolve(result);
            });
        })
    },
};
