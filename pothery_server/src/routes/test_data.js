
const db = require("../database/msql_interface");

/* public code */

module.exports = { 
    test_data_get
};

function test_data_get(router) {
	router.get("/test_data", (req, res) => {
		const query_string = "SELECT * FROM test_data";
		db
		.query(query_string)
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			res.json("error: ", err);
		});
	});
	return;
}

