const express = require("express");
const { mongoose } = require("mongoose");
const movies = require("./schemas/movies.schema");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

const dbURL =
  "mongodb+srv://adarshb:BpAxbkn6dbDnSfEH@adarsh-backend.4kqk1jp.mongodb.net/movie";

mongoose
  .connect(dbURL)
  .then((data) => {
    console.log("DB CONNECT");
    app.listen(3000, (err, data) => console.log("server up"));
  })
  .catch((err) => console.log(err));
