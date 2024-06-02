const db = require("../database/msql_interface");

/* public code */

module.exports = { 
  login_post
};

function login_post(router) {
	router.post("/login", (req, res) => {
	const { username, password } = req.body;
	console.log("Received login request with:", { username, password });
	if (username && password) {
	  	const query = "SELECT * FROM users WHERE email = ? AND password = ?";
	  	db.query(query, [username, password])
		.then((result) => {
			console.log("Query result:", result);
			if (result.length > 0) {
				res.status(200).json({ message: "Login successful" });
			} else {
				res.status(401).json({ message: "Incorrect username or password" });
			}
		})
		.catch((err) => {
		  console.error("SQL Error:", err);
		  res.status(500).json({ error: err.message });
		});
	} else {
		res.status(400).json({ message: "Username and password are required" });
	}
  });
  return;
}
