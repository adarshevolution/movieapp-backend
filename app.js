const express = require("express");
const { mongoose } = require("mongoose");
const moviesRoute = require("./routes/moviesRoute");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/movies", moviesRoute);

app.get("/", (req, res) => {
  return res.send("hello");
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
