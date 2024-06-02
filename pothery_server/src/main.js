const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const mysql_interface = require("./database/msql_interface");
const routes = require("./routes"); // Import the new routes

app.use(cors());
app.use(express.json());

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
