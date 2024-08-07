const express = require("express");
const router = express.Router();

const enable2fa = require("./routes/enable2fa");
const login = require("./routes/login");
const register = require("./routes/register");
const reset_password = require("./routes/reset_password");
const verify2fa = require("./routes/verify2fa");
const test_data = require("./routes/test_data");
const profile = require("./routes/profile");
const documents = require("./routes/documents");
const payment = require("./routes/payment");
const logout = require("./routes/logout");
const products = require("./routes/products");
const shopping_cart = require("./routes/shopping_cart");
const checkout = require("./routes/checkout");
const posts = require("./routes/posts");
const events = require("./routes/events");
const subscription = require("./routes/subscription");

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
  profile.profile_routes(router);
  documents.document_list_post(router);
  documents.document_delete_post(router);
  documents.document_add_post(router);
  logout.logout_post(router);
  payment.payment_post(router);
  payment.payment_get(router);
  payment.payment_rm_post(router);
  products.products_routes(router);
  shopping_cart.shopping_cart_routes(router);
  checkout.checkout_routes(router);
  posts.post_routes(router);
  events.eventroutes(router);
  subscription.subscription_routes(router);

  test_data.test_data_get(router); // For testing

  app.use("/api", router); // Use the new routes
  return;
}
