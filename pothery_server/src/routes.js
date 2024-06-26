const express = require("express");
const router = express.Router();

const enable2fa = require("./routes/enable2fa");
const login = require("./routes/login");
const register = require("./routes/register");
const reset_password = require("./routes/reset_password");
const verify2fa = require("./routes/verify2fa");
const test_data = require("./routes/test_data");
const profile = require("./routes/profile"); // Import the profile routes
const documents = require("./routes/documents");

/* public code */

module.exports = {
  initialize_routes,
};

function initialize_routes(app) {
  enable2fa.enable2fa_post(router);
  verify2fa.verify2fa_post(router);
  register.register_post(router);
  login.login_post(router);
  reset_password.reset_password_post(router);
  profile.profile_routes(router); // Use the profile routes
  documents.document_list_post(router);
  documents.document_delete_post(router);
  documents.document_add_post(router);

  test_data.test_data_get(router); // For testing

  app.use("/api", router); // Use the new routes
  return;
}
