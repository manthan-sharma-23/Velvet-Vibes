const Product = require("../models/Product");
const User = require("../models/User");

/*CREATE A PRODUCT*/
async function createProduct(req, res) {
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (!user.isAdmin) {
      return res.status(403).json({ message: "Acess Denied" });
    }
    const { name, description, category, subcategory, price, veg, vegan, isNew } =
      req.body;
    const image = req.result.url;
    const newProduct = await new Product({
      name,
      description,
      subcategory,
      image,
      category,
      price,
      veg,
      vegan,
      isNew: isNew || false,
    });
    console.log(newProduct);
    try {
      await newProduct.save();
      console.log("HI");
    } catch (error) {
      console.log("Couldnt save", error);
    }
    await newProduct.save();
    res.status(201).json({
      message: "Product Created Successfuly",
      newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(203).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getCategoryProducts(req, res) {
  try {
    const category = req.params;
    console.log(category);
    const product = await Product.find(category);
    res.status(203).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function getSubcategoryProducts(req, res) {
  try {
    const { category, subcategory } = req.params;
    const product = await Product.find({
      $and: [{ category }, { subcategory }],
    });
    return res.status(203).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getEachProduct(req, res) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    return res.status(202).json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
async function getNewProducts(req, res) {
  try {
    const products = await Product.find({ isNew: true });
    if (!products) {
      return res.status(404).json({ message: "No new products in house" });
    }

    return res.status(202).json({ message: "Successful", products });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getCategoryProducts,
  getSubcategoryProducts,
  getEachProduct,
  getNewProducts,
};
