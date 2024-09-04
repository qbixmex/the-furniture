import { products } from "@/data/furniture";

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};