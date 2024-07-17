const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

const speakeasy = require("speakeasy"); // Used to generate and verify 2FA codes
const qr = require("qrcode");

/* public code */

module.exports = { 
    enable2fa_post
};

function enable2fa_post(router) {
    router.post("/enable2fa", crypto.authorize_token, (req, res) => {

        let result = crypto.decode_token(req);

        const secret = speakeasy.generateSecret({ length: 20 });
        const query = "UPDATE users SET MFA_enabled = 1, _2fa_secret = ? WHERE id = ?";
        db.query(query, [secret.base32, result.uid])
        .then((result) => {
            if (result.affectedRows > 0) {
                qr.toDataURL(secret.otpauth_url, (err, url) => {
                if (err) {
                    console.error("QR Code Error:", err);
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(200).json({ message: "2FA enabled", qrCodeUrl: url });
                }
            });
            } else {
                res.status(400).json({ message: "Invalid email" });
            }
        })
        .catch((err) => {
            console.error("SQL Error:", err);
            res.status(500).json({ error: err.message });
        });
    });
    return;
}
