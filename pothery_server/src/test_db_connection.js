const db = require("./database/msql_interface");

db.connect();

db.query("SELECT 1 + 1 AS solution")
  .then((result) => {
    console.log("The solution is: ", result[0].solution);
  })
  .catch((err) => {
    console.error("Database connection error: ", err);
  });
