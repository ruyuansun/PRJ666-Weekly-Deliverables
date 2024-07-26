const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

module.exports = {
  checkout_routes,
};

function checkout_routes(router) {
  // Add Order (Checkout)
  router.post("/addOrder", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);
    const {
      items,
      total,
      taxes,
      shippingCost,
      shippingAddress,
      billingAddress,
      paymentInfo,
    } = req.body;

    // Insert the order into the database
    const insertOrderQuery = `
      INSERT INTO orders (uid, total, taxes, shipping_cost, shipping_address, billing_address, payment_info) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`;

    const orderData = [
      token_data.uid,
      total,
      taxes,
      shippingCost,
      JSON.stringify(shippingAddress),
      JSON.stringify(billingAddress),
      JSON.stringify(paymentInfo),
    ];

    db.query(insertOrderQuery, orderData)
      .then((result) => {
        if (result) {
          res.status(200).json({ message: "Order placed successfully" });
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });

  // Get all orders for a user
  router.get("/getOrders", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    const query = `
      SELECT * FROM orders WHERE uid = ?`;

    db.query(query, [token_data.uid])
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

  // Get details of a specific order
  router.get("/getOrder/:id", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);
    const orderId = req.params.id;

    const query = `
      SELECT * FROM orders WHERE uid = ? AND id = ?`;

    db.query(query, [token_data.uid, orderId])
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

  return;
}
