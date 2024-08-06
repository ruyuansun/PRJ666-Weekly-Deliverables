const db = require("../database/msql_interface");
const crypto = require("../crypto/crypto");

/* public code */

module.exports = {
  eventroutes,
};

function eventroutes(router) {
  eventget(router);
  eventadd(router);
  return;
}

/* private code */

function eventget(router) {
  // get all events
  router.get("/getEvents", crypto.authorize_token,(req, res) => {

    //let token_data = crypto.decode_token(req);

    const query = `SELECT e.*,u.*
                  FROM event e
                  LEFT JOIN users u
                  ON e.user_id = u.id
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


function eventadd(router) {
  router.post("/addEvent", crypto.authorize_token, (req, res) => {
    let token_data = crypto.decode_token(req);

    let { img_url,name,description,time } = req.body;
    if (name==undefined || img_url==undefined || description==undefined || time==undefined)
      {res.status(500).json({ error: "All fields must be provided" });return}

    const query =
      "INSERT INTO event (user_id, img_url, name,description,time) VALUES ( ?, ?, ?,?,?)";
    db.query(query, [token_data.uid, img_url, name,description,time])
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
