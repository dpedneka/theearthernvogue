import { Product, ProductForm, productSchema } from "../schemas";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { convertHtmlToText } from "@/helper/html";

const ProductForms = ({
  onSubmit,
  suppliersQuery,
  productCategoriesQuery,
  defaultValues,
}: any) => {
  const [suppliers, setSuppliers] = useState([]);
  const [categories, setCategories] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: zodResolver(productSchema),
    defaultValues,
  });

  const supplier: any = watch("supplier");
  const category: any = watch("category");
  const status = watch("status");
  const productImage: any = watch("productImage");
  const productDescription = watch("productDescription");

  useEffect(() => {
    if (suppliersQuery.data) {
      setSuppliers(
        suppliersQuery.data.map((x: any) => ({
          _id: x._id,
          supplierName: x.supplierName,
        }))
      );
    }
  }, [suppliersQuery]);

  useEffect(() => {
    if (productCategoriesQuery.data) {
      setCategories(
        productCategoriesQuery.data
          .filter((x: any) => x.parent !== null)
          .map((x: any) => ({
            _id: x._id,
            productCategory: x.productCategory,
          }))
      );
    }
  }, [productCategoriesQuery]);
  console.log(errors);
  console.log(productImage);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Product Name"
            fullWidth
            {...register("productName")}
            error={!!errors.productName}
            helperText={errors.productName?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Controller
            name="supplier"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                id="suppliers"
                onChange={(_, item) => onChange(item)}
                value={supplier || value}
                options={suppliers}
                getOptionLabel={(option) => option.supplierName}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Supplier"
                    helperText={errors.supplier?.message}
                    error={!!errors.supplier}
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Controller
            name="category"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                id="categories"
                onChange={(_, item) => onChange(item)}
                value={category || value}
                options={categories}
                getOptionLabel={(option) => option.productCategory}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Product Category"
                    helperText={errors.category?.message}
                    error={!!errors.category}
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Product Description"
            fullWidth
            multiline
            rows={2}
            value={convertHtmlToText(productDescription)}
            {...register("productDescription")}
            error={!!errors.productDescription}
            helperText={errors.productDescription?.message}
          ></TextField>
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="SKU"
            fullWidth
            {...register("SKU")}
            error={!!errors.SKU}
            helperText={errors.SKU?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Product Price"
            type="number"
            fullWidth
            {...register("productPrice", { valueAsNumber: true })}
            error={!!errors.productPrice}
            helperText={errors.productPrice?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="MRP"
            type="number"
            fullWidth
            {...register("MRP", { valueAsNumber: true })}
            error={!!errors.MRP}
            helperText={errors.MRP?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Total Quantity"
            type="number"
            fullWidth
            {...register("totalQuantity", { valueAsNumber: true })}
            error={!!errors.totalQuantity}
            helperText={errors.totalQuantity?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Size ( Length*Width*Breadth )"
            fullWidth
            {...register("size")}
            error={!!errors.size}
            helperText={errors.size?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Weight (gms)"
            fullWidth
            {...register("weight")}
            error={!!errors.weight}
            helperText={errors.weight?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            select
            placeholder="Status"
            fullWidth
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
            value={status || "Available"}
          >
            <MenuItem value={"Available"}>Available</MenuItem>
            <MenuItem value={"Out of Stock"}>Out of Stock</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} lg={6}>
          <label>Upload Product Image - </label>
          <Button variant="contained" color="secondary" component="label">
            Upload Image
            <input type="file" multiple hidden {...register("productImage")} />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProductForms;
