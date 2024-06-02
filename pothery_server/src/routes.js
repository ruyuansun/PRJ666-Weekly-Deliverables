const express = require("express");
const router = express.Router();
const db = require("./database/msql_interface");
const speakeasy = require("speakeasy"); // Used to generate and verify 2FA codes
const qr = require("qrcode");

// User register
router.post("/register", (req, res) => {
  const { email, password } = req.body;
  const checkUserQuery = "SELECT * FROM users WHERE email = ?";
  const insertUserQuery = "INSERT INTO users (email, password) VALUES (?, ?)";

  db.query(checkUserQuery, [email])
    .then((result) => {
      if (result.length > 0) {
        res.status(409).json({ message: "User already exists" });
      } else {
        return db.query(insertUserQuery, [email, password]);
      }
    })
    .then((result) => {
      if (result) {
        res.status(201).json({ message: "User registered successfully" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// User login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log("Received login request with:", { username, password });
  if (username && password) {
    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(query, [username, password])
      .then((result) => {
        console.log("Query result:", result);
        if (result.length > 0) {
          res.status(200).json({ message: "Login successful" });
        } else {
          res.status(401).json({ message: "Incorrect username or password" });
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
  const { email, newPassword } = req.body;
  if (email && newPassword) {
    const query = "UPDATE users SET password = ? WHERE email = ?";
    db.query(query, [newPassword, email])
      .then((result) => {
        if (result.affectedRows > 0) {
          res.status(200).json({ message: "Password reset successful" });
        } else {
          res
            .status(400)
            .json({ message: "Password reset failed: Invalid email" });
        }
      })
      .catch((err) => {
        console.error("SQL Error:", err);
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ message: "Email and new password are required" });
  }
});

// Enable 2FA
router.post("/enable2fa", (req, res) => {
  const email = req.body.email;
  if (email) {
    const secret = speakeasy.generateSecret({ length: 20 });
    const query =
      "UPDATE users SET 2fa_enabled = 1, 2fa_secret = ? WHERE email = ?";
    db.query(query, [secret.base32, email])
      .then((result) => {
        if (result.affectedRows > 0) {
          qr.toDataURL(secret.otpauth_url, (err, url) => {
            if (err) {
              console.error("QR Code Error:", err);
              res.status(500).json({ error: err.message });
            } else {
              res.status(200).json({ message: "2FA enabled", qrCodeUrl: url });
            }
          });
        } else {
          res.status(400).json({ message: "Invalid email" });
        }
      })
      .catch((err) => {
        console.error("SQL Error:", err);
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ message: "Email is required" });
  }
});

// Verify 2FA
router.post("/verify2fa", (req, res) => {
  const { email, code } = req.body;
  if (email && code) {
    const query = "SELECT 2fa_secret FROM users WHERE email = ?";
    db.query(query, [email])
      .then((result) => {
        if (result.length > 0) {
          const verified = speakeasy.totp.verify({
            secret: result[0].twofa_secret,
            encoding: "base32",
            token: code,
          });
          if (verified) {
            res.status(200).json({ message: "2FA verified successfully" });
          } else {
            res.status(400).json({ message: "Invalid 2FA code" });
          }
        } else {
          res.status(400).json({ message: "Invalid email" });
        }
      })
      .catch((err) => {
        console.error("SQL Error:", err);
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({ message: "Email and 2FA code are required" });
  }
});

module.exports = router;
