import { tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface";

export const getProductByIdAction = async (id: string): Promise<Product> => {
  if (!id) throw new Error("ID is required");

  if (id === "new") {
    return {
      id: "new",
      title: "",
      price: 0,
      description: "",
      gender: "men",
      images: [],
      sizes: [],
      tags: [],
      stock: 0,
    } as unknown as Product;
  }

  const { data } = await tesloApi.get<Product>(`/products/${id}`);

  const images = data.images.map((image) => {
    if (image.includes("http")) return image;
    return `${import.meta.env.VITE_API_URL}/files/product/${image}`;
  });
  return {
    ...data,
    images,
  };
};
