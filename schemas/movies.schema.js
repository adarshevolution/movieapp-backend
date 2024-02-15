const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the movie name"],
  },
  publiseYear: {
    type: Number,
    required: [true, "please provide a valid year"],
  },
  image: {
    type: String,
    required: [true, "Please  upload an Image for this Movie"],
  },
});
const movies = mongoose.model("movies", MoviesSchema);

module.exports = movies;
