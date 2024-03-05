import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(200).send({
    message: "server is running",
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is up and running on the port ${port}`);
});