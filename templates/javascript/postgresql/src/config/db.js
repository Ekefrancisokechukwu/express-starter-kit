const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL");
    return pool;
  } catch (err) {
    console.error("PostgreSQL connection error:", err);
    throw err;
  }
};

module.exports = { pool, connectDB };
