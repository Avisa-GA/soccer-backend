import express from "express";
const app = express();
require("dotenv").config();
import mongoose from "mongoose";
import bodyParser from "body-parser";

const { PORT, DATABASE_URL } = process.env;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.send(`Our Soccer application is running ${PORT}`)
);

app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
