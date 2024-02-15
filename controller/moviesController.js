const movies = require("../schemas/movies.schema");

const getMovie = async (req, res) => {
  try {
    const movie = await movies.find({});
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getMoviebyId = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findById(id);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await movies.create(req.body);
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const editMovie = async (req, res) => {
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
};

module.exports = {
  getMovie,
  getMoviebyId,
  createMovie,
  editMovie,
};
