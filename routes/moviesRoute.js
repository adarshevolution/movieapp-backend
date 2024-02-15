const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const {
  getMovie,
  getMoviebyId,
  createMovie,
  editMovie,
} = require("../controller/moviesController");

const router = express.Router();

router.get("/", getMovie);
router.get("/:id", getMoviebyId);
router.post("/create", upload.single("image"), createMovie);
router.put("/edit/:id", upload.single("image"), editMovie);

module.exports = router;
