const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  subscription_routes,
};

function subscription_routes(router) {
  get_subscription(router);
  return;
}

/* private code */

function get_subscription(router) {
  router.get("/getSubscription", crypto.authorize_token, (req, res) => {
    const token_data = crypto.decode_token(req);
    console.log(token_data);

    const query = `
      SELECT subscriptions.level, subscriptions.description, subscriptions.price
      FROM users
      LEFT JOIN subscriptions ON users.subscription_id = subscriptions.id
      WHERE users.id = ?`;

    db.query(query, [token_data.uid])
      .then((result) => {
        if (result.length > 0) {
          console.log(result);
          res.status(200).json(result[0]);
        } else {
          res.status(404).json({ error: "No subscription found." });
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
}
