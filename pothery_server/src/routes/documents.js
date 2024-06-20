const db = require("../database/msql_interface");

/* public code */

module.exports = { 
	document_list_post,
	document_delete_post,
	document_add_post
};

function document_list_post(router) {
	router.post("/documents/get", (req, res) => {
		const { email } = req.body;

		console.log("Received request for document list for", email );
		if (email) {
			const query = "SELECT id FROM users WHERE email = ?";
			db.query(query, [email])
			.then((result) => {
				console.log("Query result:", result);
				if (result.length > 0) {
					document_list_retrieve(res, result[0].id);
				} else {
					res.status(401).json({ message: "Incorrect username or password" });
				}
			})
			.catch((err) => {
				console.error("SQL Error:", err);
				res.status(500).json({ error: err.message });
			});
		}
		// Error if we don't recieve the email 
		else {
			res.status(400).json({ message: "email required" });
		}
	});
	return;
}

function document_delete_post(router) {
	router.post("/documents/delete", (req, res) => {
		const { id, email } = req.body;

		console.log("Received request to delete document", id, "for", email );
		if (email) {
			const query = "SELECT id FROM users WHERE email = ?";
			db.query(query, [email])
			.then((result) => {
				console.log("Query result:", result);
				if (result.length > 0) {
					document_delete(res, id, result[0].id);
				} else {
					res.status(401).json({ message: "Incorrect username or password" });
				}
			})
			.catch((err) => {
				console.error("SQL Error:", err);
				res.status(500).json({ error: err.message });
			});
		}
		// Error if we don't recieve the email 
		else {
			res.status(400).json({ message: "email required" });
		}
	});
	return;
}

function document_add_post(router) {
	router.post("/documents/add", (req, res) => {

		console.log(req.body)
		console.log(req.file)
	  	return;
		var email = "tes4t@test.ca";
		console.log("Received request to add document for", email );
		if (email) {
			const query = "SELECT id FROM users WHERE email = ?";
			db.query(query, [email])
			.then((result) => {
				console.log("Query result:", result);
				if (result.length > 0) {
					document_add(res, result[0].id, formData);
				} else {
					res.status(401).json({ message: "Incorrect username or password" });
				}
			})
			.catch((err) => {
				console.error("SQL Error:", err);
				res.status(500).json({ error: err.message });
			});
		}
		// Error if we don't recieve the email 
		else {
			res.status(400).json({ message: "email required" });
		}
	});
	return;
}



/* private code */

// Returns the list of documents the user uploaded
function document_list_retrieve(res, userId) {
	const query = 
	"SELECT id, name, OCTET_LENGTH(document) / 1000000 AS size, type " +
	"FROM documents WHERE user = ?";
	db.query(query, [userId])
	.then((result) => {
		console.debug("Query result:", result);
		if (result.length > 0) {
			res.status(200).json( result );
		} else {
			res.status(501).json({ message: "Incorrect username or password" });
		}
	})

	return;
}

// Returns the appropriate status code for login
function document_delete(res, id, userId) {
	const query = "DELETE FROM documents WHERE id = ? and user = ?";
	db.query(query, [id, userId])
	.then((result) => {
		console.debug("Query result:", result);
		if (result.length > 0) {
			res.status(200).json( result );
		} else {
			res.status(501).json({ message: "Incorrect username or password" });
		}
	})

	return;
}

// Returns the appropriate status code for login
function document_add(res, userId, formData) {
	const query = "INSERT INTO documents "
	"(user, document, name, type) "
	"VALUES (?, RAWTOHEX(?), test, test)";

	db.query(query, [userId, formData])
	.then((result) => {
		console.debug("Query result:", result);
		if (result.length > 0) {
			res.status(200).json( result );
		} else {
			res.status(501).json({ message: "Incorrect username or password" });
		}
	})

	return;
}