const Cart = require("../models/Cart");
const Product = require("../models/Product");
const User = require("../models/User");

async function addToCart(req, res) {
  try {
    const userId = req.user.id;
    const productId = req.params.productId;
    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).json({ message: "Product or user not found" });
    }

    const prev_cart = await Cart.findOne({
      $and: [{ userId }, { productId }],
    });

    if (prev_cart) {
      prev_cart.quantity += 1;
      prev_cart.save();
      return res.status(202).json({ message: "Item Added one more time" });
    }

    const cartItem = new Cart({
      userId,
      productId,
    });
    user.cart.push(cartItem);
    await cartItem.save();
    await user.save();

    res.status(200).json({ message: "Added to Cart Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
async function deleteFromCart(req, res) {
  try {
    const cartId = req.params.cartItemId;
    const userId = req.user.id;

    const user = await User.findById(userId);

    let cart = await Cart.findById(cartId);
    if (!cart || !user) {
      return res.status(404).json({ message: "Item or user not found" });
    }

    if (cart.quantity > 1) {
      cart = {
        productId: cart.productId,
        userId,
        quantity: cart.quantity - 1,
      };
      const newcart = await Cart.findByIdAndUpdate(cartId, cart, { new: true });

      return res
        .status(200)
        .json({ message: "Removed from Cart Successfully" });
    }

    user.cart = user.cart.filter((ci) => ci._id.toString() !== cartId);
    await user.save();
    await Cart.findByIdAndDelete(cartId);

    return res.status(200).json({ message: "Removed from Cart Successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}
async function userCart(req, res) {
  try {
    const userId = req.user.id;
    const userCart = await Cart.find({ userId });

    return res.status(202).json({ message: userCart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

module.exports = { addToCart, deleteFromCart, userCart };
