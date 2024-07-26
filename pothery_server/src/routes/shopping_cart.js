const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  shopping_cart_routes,
};

function shopping_cart_routes(router) {
  add_product_shopping_cart(router);
  get_products_shopping_cart(router);
  update_product_shopping_cart(router);
  remove_product_shopping_cart(router);
  return;
}

/* private code */

function add_product_shopping_cart(router) {
  // add product to shopping cart
  router.post("/shoppingCart/addProd", crypto.authorize_token, (req, res) => {
    const { id, qty } = req.body;
    const token_data = crypto.decode_token(req);

    const query =
      "INSERT INTO shopping_cart (productId, uid, qty) VALUES (?,?,?)";

    db.query(query, [id, token_data.uid, qty])
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

function get_products_shopping_cart(router) {
  // get all products from shopping cart
  router.get("/shoppingCart/getProd", crypto.authorize_token, (req, res) => {
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
      WHERE shopping_cart.uid = ${token_data.uid}`;

    db.query(query)
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

function update_product_shopping_cart(router) {
  // update product from shopping cart
  router.put("/shoppingCart/updateProd", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);
    const { product } = req.body;

    const query = `
      UPDATE shopping_cart 
      SET qty = ${product.qty} 
      WHERE productId = ${product.id}
      AND uid = ${token_data.uid}`;

    db.query(query)
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

function remove_product_shopping_cart(router) {
  // remove product from shopping cart
  router.delete(
    "/shoppingCart/removeProd",
    crypto.authorize_token,
    (req, res) => {
      let token_data = crypto.decode_token(req);
      const { product } = req.body;

      const query = `
      DELETE FROM shopping_cart 
      WHERE productId = ${product.id}
      AND uid = ${token_data.uid}`;

      db.query(query)
        .then((result) => {
          if (result) {
            res.status(200).json(result);
          }
        })
        .catch((err) => {
          console.error("Database error:", err);
          res.status(500).json({ error: err.message });
        });
    }
  );
}
