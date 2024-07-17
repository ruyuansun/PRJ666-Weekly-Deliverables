const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
    order_routes,
}

function order_routes() {
    router.post("/addOrder", crypto.authorize_token, (req, res) => {
        let token_data = crypto.decode_token(req);

        console.log(req.body)
    });
    return;
}