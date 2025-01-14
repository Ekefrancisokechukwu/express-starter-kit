const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

module.exports = router;
