const cors = require("cors");
require("express-async-errors");
const express = require("express");
const { config } = require("dotenv");

const notFoundMiddleware = require("./middleware/notfound");
const errorMiddleware = require("./middleware/errorHandler");

// Load environment variables
config();

const app = express();

// Express
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the node postgresql typescript API" });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
