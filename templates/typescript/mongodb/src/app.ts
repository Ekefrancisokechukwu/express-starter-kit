import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import { notFoundMiddleware } from "./middleware/notFoundMiddleware";
import { errorMiddleware } from "./middleware/errorMiddleware";

// Load environment variables
config();

const app: Express = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({ origin: "*" })); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the node mongoDB typescript API" });
});

// Error handling
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
