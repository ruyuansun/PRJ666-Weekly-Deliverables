const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const mysql_interface = require("./database/msql_interface");
const routes = require("./routes"); // Import the new routes

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // Serve static files from the uploads folder

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  initialize();
  return;
});

function initialize() {
  db_initialize();
  routes.initialize_routes(app);
  return;
}

function db_initialize() {
  mysql_interface.connect();
  return;
}

// Log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
