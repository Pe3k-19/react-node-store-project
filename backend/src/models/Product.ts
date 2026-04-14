import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  tech: [String],
});

export const Product = mongoose.model("Product", productSchema);
