const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

const multer = require("multer");
const path = require("path");

/* constants */

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../uploads/"));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	},
});

const upload = multer({ storage: storage });


/* public code */
module.exports = {
  	profile_routes,
};

function profile_routes(router) {
	router.get("/profile", crypto.authorize_token, (req, res) => {
		let token_data = crypto.decode_token(req);
		
		const query = "SELECT profile_picture, bio FROM users WHERE id = ?";
		db.query(query, [token_data.uid])
		.then((result) => {
			if (result.length > 0) {
				res.status(200).json(result[0]);
			} else {
				res.status(404).json({ message: "User not found" });
			}
		})
		.catch((err) => {
			console.error("SQL Error:", err);
			res.status(500).json({ error: err.message });
		});
	});

  	router.post("/profile", upload.single("profile_picture"), crypto.authorize_token, (req, res) => {
		let token_data = crypto.decode_token(req);
		const { bio, profile_picture } = req.body;

		const profilePicture = req.file ? profile_picture : null;

		const query = "UPDATE users SET bio = ?, profile_picture = ? WHERE id = ?";
		db.query(query, [bio, profilePicture, token_data.uid])
		.then((result) => {
			if (result.affectedRows > 0) {
			res.status(200).json({ message: "Profile updated successfully" });
			} else {
			res.status(404).json({ message: "User not found" });
			}
		})
		.catch((err) => {
			console.error("SQL Error:", err);
			res.status(500).json({ error: err.message });
		});
  	});
}
