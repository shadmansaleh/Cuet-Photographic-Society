import { Request, Response } from "express";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ErrorHandler from "./middlewares/ErrorHandler";
import RateLimiter from "./middlewares/RateLimiter";


const app = express();
app.use(RateLimiter(200));

dotenv.config();
const ORIGIN_URL = process.env.ORIGIN_URL || "http://localhost:3000";

app.use(cors({ origin: ORIGIN_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

// routes

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "success" });
});

app.use(ErrorHandler);

async function main() {
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
  // const io = new Server(PORT);
  console.log("Connecting to MongoDB...");
  await mongoose.connect(process.env.DATABASE_URL as string);
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

main().catch((err) => console.error(err));

export default app;
