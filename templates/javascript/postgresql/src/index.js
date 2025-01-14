const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
const http = require("http");
const { connectDB } = require("./config/db");

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

start();
