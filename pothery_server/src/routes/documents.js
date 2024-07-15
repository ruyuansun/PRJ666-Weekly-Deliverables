const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

const multer = require('multer')

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
	router.post("/documents/get", crypto.authorize_token, (req, res) => {
		let result = crypto.decode_token(req);
		console.log(result);
		document_list_retrieve(res, result.uid);
	});
	return;
}

function document_delete_post(router) {
	router.post("/documents/delete", crypto.authorize_token, (req, res) => {
		const { id } = req.body;
		document_delete(res, id);
	});
	return;
}

let upload = multer({ dest: k_temp_file_directory })

function document_add_post(router) {
	router.post("/documents/add", upload.single('file'), crypto.authorize_token, (req, res, next) => {
		const file = req.file;
		console.log("Request sent to add file: "+ file.originalname);

		let result = crypto.decode_token(req);

		let fileinfo = file.originalname.split(".", 2); // ["1", "2"]

		// Sanity checks
		if (file.size < k_max_file_size &&
			fileinfo[0].length <= k_max_name_length && 
			fileinfo[1].length <= k_max_type_length) {
			
			document_add(res, result.uid, file.path, fileinfo[0], fileinfo[1]);
			document_cleanup(file.path);
		} else {
			res.status(400).json({ message: "File is too big" });
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
function document_delete(res, id) {
	const query = "DELETE FROM documents WHERE id = ?";
	db.query(query, [id])
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