import pkg, { QueryResult } from "pg";
const { Pool } = pkg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

async function queryDB(query: string, params: QueryResult[]) {
  const client = await pool.connect();

  try {
    const res = await client.query(query, params);
    return res;
  } catch (err) {
    if (err instanceof Error) {
      console.error("Database query error:", err.message);
      throw err;
    } else {
      console.error("Unknown error occurred during query:", err);
      throw new Error("An unknown error occurred");
    }
  } finally {
    client.release();
  }
}

// Graceful shutdown to close the pool
async function closeDB() {
  try {
    await pool.end();
    console.log("Database connection pool closed.");
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error closing the pool:", err.message);
    } else {
      console.error("Unknown error occurred while closing the pool:", err);
    }
  }
}

export { queryDB, closeDB };
