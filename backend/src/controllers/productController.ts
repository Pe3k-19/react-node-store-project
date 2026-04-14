import { Product } from "../models/Product";

export const getProducts = async (req: any, res: any) => {
  const results = parseInt(req.query.results) || 10;
  const products = await Product.find().limit(results);
  res.json(products);
};

export const createProduct = async (req: any, res: any) => {
  const product = new Product(req.body);
  const saved = await product.save();
  res.status(201).json(saved);
};

export const updateProduct = async (req: any, res: any) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
    runValidators: true,
  });
  if (!updated) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(updated);
};

export const deleteProduct = async (req: any, res: any) => {
  const deleted = await Product.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: "Product deleted successfully" });
};
