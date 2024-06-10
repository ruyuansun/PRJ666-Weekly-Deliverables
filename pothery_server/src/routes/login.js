const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = { 
  login_post
};

function login_post(router) {
	router.post("/login", (req, res) => {
		const { username, password } = req.body;

		console.log("Received login request with:", { username, password });

		if (username && password) {
			const query = "SELECT password, MFA_enabled FROM users WHERE email = ?";
			db.query(query, [username])
			.then((result) => {
				console.log("Query result:", result);
				if (result.length > 0 && crypto.hash_password_given_matches(password, result[0].password)) {
					login_successful(res, result[0].MFA_enabled);
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

/* private code */

// Returns the appropriate status code for login
function login_successful(res, MFA_enabled) {
	if (MFA_enabled) {
		res.status(310).json({ message: "success" });
	} else {
		res.status(311).json({ message: "success" });
	}
	return;
}