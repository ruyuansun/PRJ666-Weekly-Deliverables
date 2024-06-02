
const db = require("../database/msql_interface");

/* public code */

module.exports = { 
    reset_password_post
};
  
function reset_password_post(router) {
    router.post("/reset_password", (req, res) => {
        const { email, newPassword } = req.body;
        if (email && newPassword) {
            const query = "UPDATE users SET password = ? WHERE email = ?";
            db.query(query, [newPassword, email])
            .then((result) => {
            
            if (result.affectedRows > 0) {
                res.status(200).json({ message: "Password reset successful" });
            } else {
                res
                .status(400)
                .json({ message: "Password reset failed: Invalid email" });
            }
            })
            .catch((err) => {
            console.error("SQL Error:", err);
            res.status(500).json({ error: err.message });
            });
        } else {
            res.status(400).json({ message: "Email and new password are required" });
        }
    });
    return;
}