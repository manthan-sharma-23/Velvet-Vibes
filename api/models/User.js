const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 7,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    cart: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Cart",
      },
    ],
    favourites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
    orders: [
      {
        products: [
          {
            product: {
              type: mongoose.Types.ObjectId,
              ref: "Product",
              required: true,
            },
            quantity: {
              type: Number,
              required: true,
              default: 1,
            },
          },
        ],
        totalPrice: {
          type: Number,
          required: true,
        },
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
