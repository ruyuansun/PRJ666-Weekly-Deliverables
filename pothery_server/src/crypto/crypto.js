const bcrypt = require("bcrypt")

module.exports = {
  hash_password(password) {
    return bcrypt.hash(password, 10);
  },

  hash_password_given_matches(password, hash) {
    return bcrypt.compare(password, hash);
  }
};
