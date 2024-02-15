const express = require("express");
const { mongoose } = require("mongoose");
const movies = require("./schemas/movies.schema");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("hello");
});

app.get("/movies", async (req, res) => {
  try {
    const movie = await movies.find({});
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.post("/movies/create", async (req, res) => {
  try {
    const movie = await movies.create(req.body);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.put("/movies/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findById(id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    movie.name = req.body.name;
    movie.publishYear = req.body.publishYear;
    movie.image = req.body.image;

    await movie.save();

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
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
