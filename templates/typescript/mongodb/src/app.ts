import cors from "cors";
import "express-async-errors";
import express from "express";

// middleware
import notFoundMiddleware from "./middleware/notFoundMiddleware";
import errorHandlerMiddleware from "./middleware/errorMiddleware";

// basic setup
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send(`
     <div style="width:30rem;margin:0 auto">
     <h1>MongoDB express Typescript app</h1>
     </div>
    `);
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
