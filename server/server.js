import dotenv from "dotenv";
import "express-async-errors";
import express from "express";
import cors from "cors";

import connectDB from "./db/connectDB.js";

import notFoundMiddleware from "./middleware/notFound.js";
import errorHandlingMiddleware from "./middleware/errorMiddleware.js";

import authRouter from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
