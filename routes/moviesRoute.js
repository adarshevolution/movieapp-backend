const express = require("express");
const movies = require("../schemas/movies.schema");
const {
  getMovie,
  getMoviebyId,
  createMovie,
  editMovie,
} = require("../controller/moviesController");

const router = express.Router();

router.get("/", getMovie);
router.get("/:id", getMoviebyId);
router.post("/create", createMovie);
router.put("/edit/:id", editMovie);

module.exports = router;
