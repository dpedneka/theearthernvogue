import { z } from "zod";

export const productSchema = z.object({
  productName: z.string().nonempty("Product Name is required"),
  supplier: z.object({
    _id: z.string(),
    supplierName: z.string(),
  }),
  category: z.object({
    _id: z.string(),
    productCategory: z.string(),
  }),
  productImage: z.any().optional(),
  productDescription: z
    .string()
    .min(1, { message: "Product Description is required" }),
  SKU: z.string().min(1, { message: "SKU is required" }),
  productPrice: z.number().min(0, { message: "Price must be greater then 0" }),
  MRP: z.number().min(0, { message: "Price must be greater then 0" }),
  totalQuantity: z
    .number()
    .min(0, { message: "Quantity must be greater then 0" }),
  size: z.string().min(1, { message: "Size is required" }),
  weight: z.string().min(1, { message: "Weight is required" }),
  status: z.string().min(1, { message: "Status is required" }),
});

export const productCategoriesSchema = z.object({
  productCategory: z.string().nonempty("Product Category Name is required"),
  productCatDesc: z.string().min(1, { message: "Lyrics is required" }),
  parent: z.object({
    _id: z.string(),
    productCategory: z.string(),
  }),
});

export type ProductForm = z.infer<typeof productSchema>;
export type ProductCategoryForm = z.infer<typeof productCategoriesSchema>;

export type Product = ProductForm & { id: string };
export type ProductCategory = ProductCategoryForm & { id: string };
