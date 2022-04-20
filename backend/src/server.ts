import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRouter from "./routes/userRouter";
import dataRouter from "./routes/dataRouter";

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.du0li.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  (err) => {
    if (err) console.log(err);
    console.log("Connected to database");
  }
);

app.use("/user", userRouter);
app.use("/data", dataRouter);

app.listen(3333, () => console.log("Server is running"));
