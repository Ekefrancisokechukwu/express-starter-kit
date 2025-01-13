import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import http from "http";
import connectDB from "./config/db";

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

start();
