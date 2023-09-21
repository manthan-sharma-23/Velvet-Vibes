const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    orderStatus: {
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
