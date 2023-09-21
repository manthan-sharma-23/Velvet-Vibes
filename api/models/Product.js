const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "Delights your mouth",
    },
    image: {
      type: String,
      default: "https://i.ibb.co/QDbBbPC/sweet-tooth.png",
    },
    category: {
      type: String,
      default: "desert",
    },
    subcategory: {
      type: String,
      default: "desert",
    },
    rating: {
      type: Array,
      default: [2.5],
    },
    veg: {
      type: Boolean,
      default: true,
    },
    vegan: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
      required: true,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    reviews: [
      {
        user: {
          type: mongoose.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
          min: 1,
          max: 5,
        },
        comment: {
          type: String,
        },
      },
    ],
    flavours: {
      type: Array,
      default: ["original"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
