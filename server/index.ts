import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes";

const app = express();

// aktifkan CORS untuk frontend
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// register API routes
registerRoutes(app);

// error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  console.error(err);
});

// start server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
