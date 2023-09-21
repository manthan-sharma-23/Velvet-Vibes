const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtsecret = process.env.SECRET_KEY;
const Product = require("../models/Product");

async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    const findUser = await User.findOne({ email });
    // console.log(""findUser);
    if (findUser) {
      return res.status(401).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });

    const saveUser = await newUser.save();
    const token = jwt.sign({ id: saveUser._id }, jwtsecret);
    delete saveUser.password;

    res.status(203).json({ message: "LogIn Created Successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(403).json({ message: "No such User exists" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      res.status(401).json({ message: "Login using correct credentials" });

    const token = jwt.sign({ id: user._id }, jwtsecret);
    delete user.password;

    res.status(203).json({ message: "Logged In Successfully", token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getuser(req, res) {
  try {
    const userId = req.user.id;
    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(202).json({ message: "Login Please" });
    return res.status(203).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
async function writeReview(req, res) {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    if (!productId || !userId) {
      return res.status(202).json({ message: "User or Product not found" });
    }
    const product = await Product.findById(productId);
    // res.send("sucess")
    console.log(req.body.comment);
    const { comment, rating } = req.body;
    const review = {
      user: userId,
      comment,
      rating,
    };

    product.reviews.push(review);
    product.rating.push(rating);
    await product.save();
    return res.status(202).json(product);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
async function addToFavourites(req, res) {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    if (!productId || !userId) {
      return res.status(404).json({ message: "Enter the id" });
    }
    const product = await Product.findOne({ _id: productId });
    const user = await User.findOne({ _id: userId });
    if (!product) return res.status(404).json({ message: "Product Not Found" });

    // return res.send(user);
    user.favourites.push(productId);
    await user.save();
    return res.status(202).json(user);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}
async function removeFromFavourites(req, res) {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    if (!productId || !userId) {
      return res.status(404).json({ message: "Enter the id" });
    }
    const product = await Product.findOne({ _id: productId });
    const user = await User.findOne({ _id: userId });
    if (!product) return res.status(404).json({ message: "Product Not Found" });

    // return res.send(user);
    user.favourites.remove(productId);
    await user.save();
    return res.status(202).json({ message: "removed successfully", user });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

module.exports = {
  signUp,
  login,
  getuser,
  writeReview,
  addToFavourites,
  removeFromFavourites,
};
