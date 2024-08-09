const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  payment_post,
  payment_get,
  payment_rm_post,
};

function payment_post(router) {
  router.post("/addPaymentMethod", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    const { paymentType, cardNumber, expMonth, expYear, securityCode } =
      req.body;

    // Simulate payment processing logic, which can be replaced with actual payment processing code
    console.log(`Payment type: ${paymentType}`);
    console.log(`Card number: ${cardNumber}`);
    console.log(`Expiration month: ${expMonth}`);
    console.log(`Expiration year: ${expYear}`);
    console.log(`Security code: ${securityCode}`);

    // Assume we insert payment information into the database
    const insertPaymentQuery =
      "INSERT INTO payments (payment_type, card_number, exp_month, exp_year, security_code, uid) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(insertPaymentQuery, [
      paymentType,
      cardNumber,
      expMonth,
      expYear,
      securityCode,
      token_data.uid,
    ])
      .then((result) => {
        if (result) {
          res.status(200);
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
  return;
}

function payment_get(router) {
  router.get("/getPaymentMethods", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    const query = "SELECT * FROM payments WHERE uid = ? LIMIT 1";
    db.query(query, [token_data.uid])
      .then((result) => {
        console.log("Database result:", result);

        if (result.length > 0) {
          res.status(200).json(result[0]);
        } else {
          res.status(200).json({ error: "No saved payment method found." });
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
}

function payment_rm_post(router) {
  router.post("/rmPaymentMethod", crypto.authorize_token, (req, res) => {
    const { id } = req.body;
    console.log(req.body);

    const query = "DELETE FROM payments WHERE id = ?";
    db.query(query, [id])
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
}
