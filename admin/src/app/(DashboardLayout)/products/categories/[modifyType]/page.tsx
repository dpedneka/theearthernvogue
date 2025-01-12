"use client";
import { Box } from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import { useEffect, useState } from "react";
import {
  notFound,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ProductCategory } from "../../schemas";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addProductCategories,
  getAllProductCategories,
  getProductCategoryById,
  updateProductCategories,
} from "@/api/products";
import ProductCategoryForms from "./CategoryForm";

const AddProductCategories = () => {
  const [modType, setModType] = useState<any>("add");
  const [editId, setEditId] = useState<any>("");

  const params = useParams();
  const searchParams = useSearchParams();

  const [editingProduct, setEditingProduct] = useState<ProductCategory | null>(
    null
  );
  const queryClient = useQueryClient();
  const router = useRouter();

  const productCategoriesQuery = useQuery({
    queryKey: ["productCategories"],
    queryFn: getAllProductCategories,
  });

  const productCategoryMutation = useMutation({
    mutationFn:
      modType === "add" ? addProductCategories : updateProductCategories,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["addProductCategory"] });
      router.push("/products/categories");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const productCategoryEditMutation = useMutation({
    mutationFn: getProductCategoryById,
    onSuccess: (response) => {
      setEditingProduct(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleAddProducts = (
    newProductCategory: Omit<ProductCategory, "id"> | any
  ) => {
    console.log(newProductCategory);
    // const formData = new FormData();
    let cat: any = {};
    Object.keys(newProductCategory).forEach((key: any) => {
      if (key === "parent") {
        cat[key] = newProductCategory[key]._id;
        // formData.append(
        //   key,
        //   newProductCategory[key] && newProductCategory[key]._id
        // );
      } else cat[key] = newProductCategory[key]; // formData.append(key, newProductCategory[key]);
    });

    if (modType === "update") cat[editId] = editId; // formData.append("editId", editId);
    if (modType === "update") {
      productCategoryMutation.mutate({ cat, editId });
    } else productCategoryMutation.mutate(cat);
  };

  useEffect(() => {
    if (editId) productCategoryEditMutation.mutate(editId);
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
            {!productCategoryEditMutation.isPending && (
              <ProductCategoryForms
                onSubmit={handleAddProducts}
                defaultValues={editingProduct}
                productCategoriesQuery={productCategoriesQuery}
              />
            )}
          </>
        ) : (
          <ProductCategoryForms
            onSubmit={handleAddProducts}
            defaultValues={undefined}
            productCategoriesQuery={productCategoriesQuery}
          />
        )}
      </Box>
    </DashboardCard>
  );
};

export default AddProductCategories;
