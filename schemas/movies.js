const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the movie title"],
    },
    publishYear: {
      type: Number,
      required: [true, "please provide a valid publish year"],
    },
    image: {
      type: String,
      required: [true, "please provide a valid image"],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);
const movies = mongoose.model("movies", MoviesSchema);

module.exports = movies;
