const speakeasy = require("speakeasy"); // Used to generate and verify 2FA codes

const db = require("../database/msql_interface");

/* public code */

module.exports = { 
    verify2fa_post
};

function verify2fa_post(router) {
    router.post("/verify2fa", (req, res) => {
        const { email, code } = req.body;
        if (email && code) {
            const query = "SELECT 2fa_secret FROM users WHERE email = ?";
            db.query(query, [email])
            .then((result) => {
                if (result.length > 0) {
                    const verified = speakeasy.totp.verify({
                        secret: result[0].twofa_secret,
                        encoding: "base32",
                        token: code,
                    });
                    if (verified) {
                        res.status(200).json({ message: "2FA verified successfully" });
                    } else {
                        res.status(400).json({ message: "Invalid 2FA code" });
                    }
                } else {
                    res.status(400).json({ message: "Invalid email" });
                }
            })
            .catch((err) => {
                console.error("SQL Error:", err);
                res.status(500).json({ error: err.message });
            });
        } else {
          res.status(400).json({ message: "Email and 2FA code are required" });
        }
    });
    return;
}
