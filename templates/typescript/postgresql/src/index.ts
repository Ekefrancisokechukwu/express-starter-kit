import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import http from "http";
import { Pool } from "pg";

// import connectDB from "./config/db";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// PostgreSQL Configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Test Database Connection

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("PostgreSQL connection error:", err));

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI as string);
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

start();
