const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const moviesRoute = require("./routes/moviesRoute");
const usersRoute = require("./routes/usersRoute");
const path = require("path");

const app = express();
//middleware
app.use(express.static(path.join(__dirname, "images")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/movies", moviesRoute);
app.use("/", usersRoute);

const dbURL =
  "mongodb+srv://adarshb:BpAxbkn6dbDnSfEH@adarsh-backend.4kqk1jp.mongodb.net/movie";

mongoose
  .connect(dbURL)
  .then((data) => {
    console.log("DataBase Connected");
    app.listen(5000, (err, data) => console.log("Server Up"));
  })
  .catch((err) => console.log(err));
