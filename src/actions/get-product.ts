import { products } from "@/data/furniture";

export const getProductBySlug = (slug: string) => {
  const product = products.find((product) => product.slug === slug);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};