const express = require('express');
const app = express();
const port = 5000;

const mysql_interface = require('./database/msql_interface')

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
    app.get('/api/data', get_api_test_data);
    return;
}

function get_api_test_data(req, res) {
    var query_string = "SELECT * FROM test_data";
    mysql_interface.query(query_string).then(result => {
        res.json(result);
    }).catch(err => {
        res.json("error");
    });
    return;
}
