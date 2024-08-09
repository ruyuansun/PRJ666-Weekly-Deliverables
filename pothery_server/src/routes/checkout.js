const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  checkout_routes,
};

function checkout_routes(router) {
  get_cart_checkout(router);
  add_order_checkout(router);
  return;
}

/* private code */

function get_cart_checkout(router) {
  // Get products from the shopping cart for checkout
  router.get("/checkout/getCart", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    const query = `
      SELECT products.id, 
        products.name,
        products.description, 
        products.price, 
        products.location,
        products.image,
        shopping_cart.qty
      FROM products
      INNER JOIN shopping_cart
      ON products.id = shopping_cart.productId
      WHERE shopping_cart.uid = ?`;

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
}

function add_order_checkout(router) {
  // Add order to the database and clear the shopping cart
  router.post(
    "/checkout/addOrder",
    crypto.authorize_token,
    async (req, res) => {
      const {
        items,
        total,
        taxes,
        shippingCost,
        shippingAddress,
        billingAddress,
        paymentInfo,
      } = req.body;
      const token_data = crypto.decode_token(req);

      try {
        // Insert order into the orders table
        const orderQuery = `
        INSERT INTO orders (uid, total, taxes, shipping_cost, shipping_address, billing_address, payment_info)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const orderValues = [
          token_data.uid,
          total,
          taxes,
          shippingCost,
          JSON.stringify(shippingAddress),
          JSON.stringify(billingAddress),
          JSON.stringify(paymentInfo),
        ];

        const orderResult = await db.query(orderQuery, orderValues);
        const orderId = orderResult.insertId;

        // Insert order items into the order_items table
        const orderItemsPromises = items.map((item) => {
          const orderItemQuery = `
          INSERT INTO order_items (orderId, productId, qty, price)
          VALUES (?, ?, ?, ?)`;
          const orderItemValues = [orderId, item.id, item.qty, item.price];

          return db.query(orderItemQuery, orderItemValues);
        });

        await Promise.all(orderItemsPromises);

        // Clear the shopping cart
        const clearCartQuery = "DELETE FROM shopping_cart WHERE uid = ?";
        await db.query(clearCartQuery, [token_data.uid]);

        res.status(200).json({ message: "Order placed successfully!" });
      } catch (err) {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      }
    }
  );
}
