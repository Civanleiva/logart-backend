import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import userRouter from "./router/userRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/logart", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users/", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Serving at http://localhost:${port}`);
});
