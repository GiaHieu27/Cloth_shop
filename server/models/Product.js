const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image01: {
      type: String,
      required: true,
    },
    image02: {
      type: Boolean,
      required: true,
    },
    slug: {
      type: String,
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
    reviews: [
      {
        type: ObjectId,
        ref: "Reviews",
      },
    ],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
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
