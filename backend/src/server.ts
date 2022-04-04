import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter";

const app = express();

mongoose.connect("mongodb://127.0.0.1/users", (err) => {
    if (err) console.log(err);
    console.log("Connected to database");
});

app.use("/user", express.json(), userRouter);

app.listen(3333, () => console.log("Server is running"));
