const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image01: {
      type: String,
      required: true,
    },
    image02: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    categorySlug: {
      type: String,
    },
    colors: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [
      {
        type: ObjectId,
        ref: "Review",
      },
    ],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
