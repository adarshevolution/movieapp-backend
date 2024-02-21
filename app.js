const express = require("express");
const { mongoose } = require("mongoose");
const cors = require("cors");
const moviesRoute = require("./routes/moviesRoute");
const usersRoute = require("./routes/usersRoute");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
//middleware
app.use(express.static(path.join(__dirname, "images")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use("/movies", moviesRoute);
app.use("/", usersRoute);

const PORT = process.env.PORT || 5000;
const dbURL = process.env.MONGO_URL;

mongoose
  .connect(dbURL)
  .then((data) => {
    console.log("DataBase Connected");
    app.listen(PORT, (err, data) => console.log("Server Up"));
  })
  .catch((err) => console.log(err));
