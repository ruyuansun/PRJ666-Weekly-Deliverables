const db = require("../database/msql_interface");
const multer = require('multer')
const fs = require('fs');

/* constants */

const k_temp_file_directory = "C:/TEMP/"	// TODO: make this a configuration
const k_max_file_size = 16000000;	// 16 MB
const k_max_name_length = 128;
const k_max_type_length = 16;

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

let upload = multer({ dest: k_temp_file_directory })

function document_add_post(router) {
	router.post("/documents/add", upload.single('file'), (req, res, next) => {
		const file = req.file;
		console.log("Request sent to add file: "+ file.originalname);


		var email = "tes4t@test.ca";
		console.log("Received request to add document for", email );
		if (email) {
			const query = "SELECT id FROM users WHERE email = ?";
			db.query(query, [email])
			.then((result) => {
				console.log("Query result:", result);
				let fileinfo = file.originalname.split(".", 2); // ["1", "2"]

				// Sanity checks
				if (result.length > 0 &&
					file.size < k_max_file_size &&
					fileinfo[0].length <= k_max_name_length && 
					fileinfo[1].length <= k_max_type_length) {
					
					document_add(res, result[0].id, file.path, fileinfo[0], fileinfo[1]);
					document_cleanup(file.path);
				} else {
					res.status(400).json({ message: "File is too big" });
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
		res.status(200).json( result );
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
			res.status(400).json({ message: "Unable to delete" });
		} else {
			res.status(200).json( result );
		}
	})

	return;
}

// Returns the appropriate status code for login
function document_add(res, uid, path, name, type) {
	const query = "INSERT INTO documents (user, document, name, type) VALUES (?, LOAD_FILE(?), ?, ?)";
	db.query(query, [uid, path, name, type])
	.then((result) => {
		console.debug("Query result:", result);
		if (result.length > 0) {
			res.status(401).json({ message: "Failed to insert document" });
		} else {
			res.status(200).json( result );
		}
	})

	return;
}

// Cleanup file generated
function document_cleanup(path) {
	//fs.unlinkSync(path)
	return;
}