const express = require("express");
const { signup, singin } = require("../controller/usersController");
const router = express.Router();

router.post("/signin", singin);
router.post("/signup", signup);

module.exports = router;
