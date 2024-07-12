const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

const multer = require("multer");
const path = require("path");

/* public code */
module.exports = {
  profile_routes,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

function profile_routes(router) {
  router.get("/profile", crypto.authorize_token, (req, res) => {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const query =
      "SELECT email, profile_picture, bio FROM users WHERE email = ?";
    db.query(query, [email])
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

  router.post("/profile", upload.single("profile_picture"), (req, res) => {
    const { email, bio } = req.body;
    const profilePicture = req.file ? req.file.filename : null;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const query =
      "UPDATE users SET bio = ?, profile_picture = ? WHERE email = ?";
    db.query(query, [bio, profilePicture, email])
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
