const mysql = require("mysql2");
var connection;

module.exports = {
  connect() {
    connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "pothery",
    });
  },

  query(sql, params) {
    return new Promise(function (resolve, reject) {
      connection.execute(sql, params, function (err, result, fields) {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};
