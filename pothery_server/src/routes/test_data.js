
const db = require("../database/msql_interface");

/* public code */

module.exports = { 
<<<<<<< HEAD
    test_data_post
};

function test_data_post(router) {
=======
    test_data_get
};

function test_data_get(router) {
>>>>>>> 214a62c186256192f2d185ec1c23865542cb7b28
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

