const express = require("express");
const app = express();
const port = 3000;

const mysql_interface = require("./database/msql_interface");

const routes = require("./routes"); // Import the new routes

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  initialize();
  return;
});

function initialize() {
  db_initialize();
  initialize_routes();
  return;
}

function db_initialize() {
  mysql_interface.connect();
  return;
}

function initialize_routes() {
  app.get("/api/data", get_api_test_data);
  app.use("/api", routes); // Use the new routes
  return;
}

function get_api_test_data(req, res) {
  var query_string = "SELECT * FROM test_data";
  mysql_interface
    .query(query_string)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json("error");
    });
  return;
}
