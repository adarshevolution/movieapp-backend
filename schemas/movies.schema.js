const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the movie name"],
    },
    publishYear: {
      type: Number,
      required: [true, "please provide a valid publish year"],
    },
    image: {
      type: String,
      required: [true, "Please  upload an Image for this Movie"],
    },
  },
  {
    timestamps: true,
  }
);
const movies = mongoose.model("movies", MoviesSchema);

module.exports = movies;
