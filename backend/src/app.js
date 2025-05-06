import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import flashcardRouter from "./routes/flashcard.routes.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use(errorHandler);

app.use("/api/v1/flashcard", flashcardRouter);

export { app };
