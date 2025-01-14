"use client";
import { useEffect, useState } from "react";
import { Product, ProductForm } from "../schemas";
import { Box } from "@mui/material";
import {
  notFound,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import ProductForms from "./ProductForms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllSuppliers } from "@/api/suppliers";
import {
  addProducts,
  getAllProductCategories,
  getProductById,
  updateProduct,
} from "@/api/products";
import DashboardCard from "../../components/shared/DashboardCard";
import { convertTextToHtml } from "@/helper/html";

const AddProduct = () => {
  const [modType, setModType] = useState<any>("add");
  const [editId, setEditId] = useState<any>("");

  const params = useParams();
  const searchParams = useSearchParams();

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const queryClient = useQueryClient();
  const router = useRouter();

  const suppliersQuery = useQuery({
    queryKey: ["suppliers"],
    queryFn: getAllSuppliers,
  });

  const productCategoriesQuery = useQuery({
    queryKey: ["productCategories"],
    queryFn: getAllProductCategories,
  });

  const productMutation = useMutation({
    mutationFn: modType === "add" ? addProducts : updateProduct,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["addProduct"] });
      router.push("/products");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const productEditMutation = useMutation({
    mutationFn: getProductById,
    onSuccess: (response) => {
      setEditingProduct(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleAddProducts = (newProduct: Omit<Product, "id"> | any) => {
    const formData = new FormData();
    Object.keys(newProduct).forEach((key: any) => {
      if (key !== "image") {
        if (key === "supplier" || key === "category") {
          formData.append(key, newProduct[key] && newProduct[key]._id);
        } else if (key === "productDescription")
          formData.append(key, convertTextToHtml(newProduct[key]));
        else formData.append(key, newProduct[key]);
      }
    });

    formData.append("image", newProduct.productImage[0]);
    // formData.append("createdAt", Date.now().toString());
    // formData.append("updatedAt", Date.now().toString());
    if (modType === "update") formData.append("editId", editId);

    if (modType === "update") {
      productMutation.mutate({ formData, editId });
    } else productMutation.mutate(formData);
  };

  useEffect(() => {
    if (editId) productEditMutation.mutate(editId);
  }, [editId]);

  useEffect(() => {
    setModType(params && params.modifyType ? params.modifyType : "add");
  }, [params]);

  useEffect(() => {
    setEditId(searchParams?.get("editId"));
  }, [searchParams]);

  if (modType !== "add" && modType !== "update") {
    return notFound();
  }

  return (
    <DashboardCard title="Add Products">
      <Box>
        {modType === "update" ? (
          <>
            {!productEditMutation.isPending && (
              <ProductForms
                onSubmit={handleAddProducts}
                defaultValues={editingProduct}
                suppliersQuery={suppliersQuery}
                productCategoriesQuery={productCategoriesQuery}
              />
            )}
          </>
        ) : (
          <ProductForms
            onSubmit={handleAddProducts}
            defaultValues={undefined}
            suppliersQuery={suppliersQuery}
            productCategoriesQuery={productCategoriesQuery}
          />
        )}
      </Box>
    </DashboardCard>
  );
};

export default AddProduct;
