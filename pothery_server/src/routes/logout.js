const crypto = require("../crypto/crypto");

module.exports = { 
    logout_post
};

function logout_post(router) {
    router.post("/logout", crypto.authorize_token, (req, res) => {
		const { token } = req.body;
		crypto.invalidate_token(token);
        res.sendStatus(200);
	});
	return;
}