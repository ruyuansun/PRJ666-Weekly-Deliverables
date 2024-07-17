const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

const speakeasy = require("speakeasy"); // Used to generate and verify 2FA codes

/* public code */

module.exports = { 
    verify2fa_post
};

function verify2fa_post(router) {
    router.post("/verify2fa", (req, res) => {
        const { uid, code } = req.body;
        if (uid && code) {
            const query = "SELECT _2fa_secret FROM users WHERE id = ?";
            db.query(query, [uid])
            .then((result) => {
                if (result.length > 0) {
                    const verified = speakeasy.totp.verify({
                        secret: result[0]._2fa_secret,
                        encoding: "base32",
                        token: code,
                    });
                    if (verified) {
                        const token = crypto.create_token(uid)

                        res.status(200).json({ 
                            message: "2FA verified successfully",
                            accessToken: token
                        });
                    } else {
                        res.status(400).json({ message: "Invalid 2FA code" });
                    }
                } else {
                    res.status(400).json({ message: "Invalid uid" });
                }
            })
            .catch((err) => {
                console.error("SQL Error:", err);
                res.status(500).json({ error: err.message });
            });
        } else {
          res.status(400).json({ message: "Uid and 2FA code are required" });
        }
    });
    return;
}
