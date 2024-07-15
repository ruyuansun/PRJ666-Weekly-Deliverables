/* imports */

require('dotenv').config()

const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* constants */

let k_print_request_results = 1;
let k_print_query_results = 1;

/* public code */

module.exports = { 
  login_post
};

function login_post(router) {
	router.post("/login", (req, res) => {
		const { username, password } = req.body;

		if (k_print_request_results) { console.log("Received login request with:", { username, password }); }

		if (username && password) {
			confirm_login(res, username, password);
		} else {
			res.status(400).json({ message: "Username and password are required" });
		}
  });
  return;
}

/* private code */

// Return data from username
function query_login_data_from_user(username)
{
	return new Promise(function(resolve,reject) {
		const query = "SELECT id, password, MFA_enabled FROM users WHERE email = ?";
		db.query(query, [username])
		.then((result) => {
			if (result.length > 0) {
				let data = {
					uid: result[0].id,
					password: result[0].password,
					mfa_enabled: result[0].MFA_enabled
				}
				resolve(data)	
			}
			else {
				reject("No users found");
			}
		})
		.catch((err) => {
			console.error("SQL Error:", err);
			reject(err.message);
		});
	});	
}

function confirm_login(res, username, password)
{
	query_login_data_from_user(username)
	.then((result) => {
		if (k_print_query_results) { console.debug("Query result:", result); }

		if ( crypto.hash_password_given_matches(password, result.password) ) {
			login_successful(res, result);
		} else {
			res.status(401).json({ message: "Incorrect username or password" });
		}
	})
	.catch((result) => {
		console.log(result);
		res.status(500).json({ error: result.message });
	});
	return;
}

// Returns the appropriate status code for login
function login_successful(res, result) {
	const status = (result.mfa_enabled ? 311 : 310);

	// Don't give token if mfa
	// We give it later
	if (!result.mfa_enabled) {
		const token = crypto.create_token(result.uid)

		res.status(status).json({
			message: "success",
			accessToken: token 
		});
	}
	else
	{
		res.status(status).json({ 
			message: "success",
			uid:  result.uid
		});
	}

	return;
}