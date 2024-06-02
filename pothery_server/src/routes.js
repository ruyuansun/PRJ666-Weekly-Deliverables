const express = require("express");
const router = express.Router();
const db = require("./database/msql_interface");

// User register
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const query = "INSERT INTO users (email, password) VALUES (?, ?)";
  console.log("Query:", query);
  console.log("Parameters:", [email, password]);
  db.query(query, [email, password])
    .then((result) => {
      res.status(201).json({ message: "User registered successfully" });
    })
    .catch((err) => {
      console.error("SQL Error:", err);
      res.status(500).json({ error: err.message });
    });
});

// User login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [username, password])
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((err) => {
        console.error("SQL Error:", err);
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ message: "Username and password are required" });
  }
});

// Reset Password
router.post("/resetPassword", (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const query = "UPDATE users SET password = ? WHERE password = ?";
  db.query(query, [newPassword, currentPassword])
    .then((result) => {
      res.status(200).json({ message: "Password reset successful" });
    })
    .catch((err) => {
      console.error("SQL Error:", err);
      res.status(500).json({ error: err.message });
    });
});

// Enable 2FA
router.post("/enable2fa", (req, res) => {
  // Implementation for enabling 2FA
  res.status(200).json({ message: "2FA enabled" });
});

// 2FA verification
router.post("/login2fa", (req, res) => {
  // Implementation for 2FA login verification
  res.status(200).json({ message: "2FA login successful" });
});

module.exports = router;
