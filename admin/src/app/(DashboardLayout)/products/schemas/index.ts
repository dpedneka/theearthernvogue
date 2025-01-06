import { z } from "zod";

export const productSchema = z.object({
  productId: z.string().nonempty("Product ID is required"),
  productName: z.string().nonempty("Product Name is required"),
  categoryId: z.string().nonempty("Category ID is required"),
  subCategory: z.string().nonempty("Sub Category is required"),
  productDescription: z.string().optional(),
  price: z.number().min(0, "Price must be greater than or equal to 0"),
});

export type ProductForm = z.infer<typeof productSchema>;

export type Product = ProductForm & { id: string };
