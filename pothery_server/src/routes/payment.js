const db = require("../database/msql_interface");

/* public code */

module.exports = {
  payment_post,
};

function payment_post(router) {
  router.post("/addPaymentMethod", (req, res) => {
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
      "INSERT INTO payments (payment_type, card_number, exp_month, exp_year, security_code) VALUES (?, ?, ?, ?, ?)";

    db.query(insertPaymentQuery, [
      paymentType,
      cardNumber,
      expMonth,
      expYear,
      securityCode,
    ])
      .then((result) => {
        if (result) {
          res.status(200).json({ message: "Payment processed successfully" });
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
  return;
}
