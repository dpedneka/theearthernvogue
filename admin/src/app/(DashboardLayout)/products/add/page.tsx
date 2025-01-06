"use client";
import { useState } from "react";
import { Product, ProductForm, productSchema } from "../schemas";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, TextField } from "@mui/material";

const AddProduct = () => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const { control, handleSubmit, reset } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productId: "",
      productName: "",
      categoryId: "",
      subCategory: "",
      productDescription: "",
      price: 0,
    },
  });

  const onSubmit = (data: ProductForm) => {
    if (editingProduct) {
    } else {
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <Controller
              name="productId"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Product ID"
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Controller
              name="productName"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Product Name"
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Controller
              name="categoryId"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Category ID"
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Controller
              name="subCategory"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Sub Category"
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Controller
              name="productDescription"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  multiline
                  {...field}
                  label="Product Description"
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Controller
              name="price"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  type="number"
                  label="Price"
                  fullWidth
                  margin="dense"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit(onSubmit)} variant="contained">
              {editingProduct ? "Update" : "Add"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddProduct;
