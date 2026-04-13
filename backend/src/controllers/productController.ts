import { products } from "../data/products";

export const getProducts = (req: any, res: any) => {
  res.json(products);
};
