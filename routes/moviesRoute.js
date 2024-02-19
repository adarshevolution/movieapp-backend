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
const auth = require("../auth/auth");

const router = express.Router();

router.get("/", auth, getMovie);
router.get("/:id", auth, getMoviebyId);
router.post("/create", auth, upload.single("image"), createMovie);
router.put("/edit/:id", auth, upload.single("image"), editMovie);

module.exports = router;
