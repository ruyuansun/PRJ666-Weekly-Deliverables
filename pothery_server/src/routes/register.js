const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = { 
    register_post
};

function register_post(router) {
    router.post("/register", (req, res) => {
        const { email, password } = req.body;
        const checkUserQuery = "SELECT * FROM users WHERE email = ?";
        const insertUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";

        db.query(checkUserQuery, [email])
        .then((result) => {
            if (result.length > 0) {
                res.status(409).json({ message: "User already exists" });
            } else {
                crypto.hash_password(password)
                .then((hashed_pass) => {
                    console.log(hashed_pass);
                    db.query(insertUserQuery, [email, hashed_pass])
                    .then((result) => {
                        if (result) {
                            res.status(201).json({ message: "User registered successfully" });
                        }
                    });    
                })
            }
        })
        
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
    });
    return;
}
  