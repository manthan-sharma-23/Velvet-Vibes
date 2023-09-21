const express = require("express");
const {
  signUp,
  login,
  getuser,
  writeReview,
  addToFavourites,
  removeFromFavourites,
} = require("../controllers/auth");

const authenticate = require("../middleware/authentication");
const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/getuser", authenticate, getuser);
router.put("/favourite/:productId", authenticate, addToFavourites);
router.put("/removefavourite/:productId", authenticate, removeFromFavourites);
router.post("/writereview/:productId", authenticate, writeReview);

module.exports = router;
