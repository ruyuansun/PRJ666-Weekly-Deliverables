require('dotenv').config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  hash_password,
  hash_password_given_matches,
  decode_token,
  create_token,
  authorize_token,
  invalidate_token,
};

let invalid_tokens = [""];

async function hash_password(password) {
  return await bcrypt.hash(password, 13);
}

async function hash_password_given_matches(password, hash) {
  const valid = await bcrypt.compare(password, hash);
  return valid;
}

function decode_token(req) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  return jwt.decode(token, "PRJ666");
}
console.log("MY_SECRET:", "PRJ666"); // Add this line for debugging

function create_token(uid) {
  return jwt.sign({ uid }, "PRJ666");
}

function authorize_token(req, res, next) {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "PRJ666", (err) => {
    if (err || invalid_tokens.includes(token)) return res.sendStatus(403);
    next();
  });
  return;
}

function invalidate_token(inv_token) {
  invalid_tokens.push(inv_token);
  return;
}
