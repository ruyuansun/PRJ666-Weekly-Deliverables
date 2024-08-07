const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  products_routes,
};

function products_routes(router) {
  product_get(router);
  product_add_post(router);
  product_remove_post(router);
  return;
}

/* private code */

function product_get(router) {
  // get all products except for the current user
  router.get("/getProd", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    const query = "SELECT * FROM products WHERE uid != " + token_data.uid;

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

  // get products for the current user
  router.get("/getProd/user", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    const query = "SELECT * FROM products WHERE uid = " + token_data.uid;

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

function product_add_post(router) {
  router.post("/addProd", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    let { name, description, price, location, image } = req.body;

    const query =
      "INSERT INTO products (description, price, location, uid, name, image) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(query, [description, price, location, token_data.uid, name, image])
      .then((result) => {
        if (result) {
          res.status(200).json({ message: result });
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
  return;
}

function product_remove_post(router) {
  router.post("/rmProd", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);
    let { id } = req.body;

    const query = "DELETE FROM products WHERE id=?;";
    db.query(query, [id])
      .then((result) => {
        if (result) {
          res.status(200).json({ message: result });
        }
      })
      .catch((err) => {
        console.error("Database error:", err);
        res.status(500).json({ error: err.message });
      });
  });
  return;
}
