import cors from "cors";
import "express-async-errors";
import express, { Express } from "express";
import notFoundMiddleware from "./middleware/notFoundMiddleware";
import { errorMiddleware } from "./middleware/errorMiddleware";

const app: Express = express();

// Express
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the node postgresql typescript API" });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
