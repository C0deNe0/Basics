import http from "http";
import { env } from "./env";
import express from "express";
import type { Application } from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes";
import { config } from "dotenv";

const PORT = env?.PORT ?? 8000;

const app: Application = express();

app.use(
  cors({
    origin: "*",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
