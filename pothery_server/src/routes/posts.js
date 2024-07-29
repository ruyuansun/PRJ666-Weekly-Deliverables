const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  post_routes,
};

function post_routes(router) {
  post_get(router);
  return;
}

/* private code */

function post_get(router) {
  // get all posts
  router.get("/getPosts", crypto.authorize_token,(req, res) => {

    let token_data = crypto.decode_token(req);

    const query = `SELECT p.*,u.*
                  FROM post p
                  LEFT JOIN users u
                  ON p.user_id = u.id
                  
                  `

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
