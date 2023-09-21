const express = require("express");
const authenticate = require("../middleware/authentication");
const { addToCart, deleteFromCart, userCart } = require("../controllers/cart");


const router = express.Router();

router.put("/addtocart/:productId", authenticate, addToCart);
router.delete("/removefromcart/:cartItemId", authenticate, deleteFromCart);
router.get("/usercart", authenticate, userCart);


module.exports = router;
