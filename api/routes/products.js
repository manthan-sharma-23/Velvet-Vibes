const {
  getAllProducts,
  createProduct,
  getCategoryProducts,
  getSubcategoryProducts,
  getEachProduct,
  getNewProducts,
} = require("../controllers/products");
const express = require("express");
const authenticate = require("../middleware/authentication");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();
const imgUpload = require("../middleware/imageuploader");

//Routes
router.post(
  "/createproduct",
  authenticate,
  upload.single("image"),
  imgUpload,
  createProduct
);
router.get("/getproducts", getAllProducts);
router.get("/newproducts", getNewProducts);
router.get("/eachproduct/:productId", getEachProduct);
router.get("/:category/", getCategoryProducts);
router.get("/:category/:subcategory", getSubcategoryProducts);

module.exports = router;
