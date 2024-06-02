const speakeasy = require("speakeasy"); // Used to generate and verify 2FA codes
const qr = require("qrcode");

const db = require("../database/msql_interface");

/* public code */

module.exports = { 
    enable2fa_post
};

function enable2fa_post(router) {
    router.post("/enable2fa", (req, res) => {
        const email = req.body.email;
        if (email) {
            const secret = speakeasy.generateSecret({ length: 20 });
            const query = "UPDATE users SET 2fa_enabled = 1, 2fa_secret = ? WHERE email = ?";
            
            db.query(query, [secret.base32, email])
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
        } else {
            res.status(400).json({ message: "Email is required" });
        }
    });
    return;
}
