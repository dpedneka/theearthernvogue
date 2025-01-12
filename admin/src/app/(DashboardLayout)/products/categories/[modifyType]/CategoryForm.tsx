import { productCategoriesSchema, ProductCategoryForm } from "../../schemas";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Autocomplete, Button, Grid, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const ProductCategoryForms = ({
  onSubmit,
  productCategoriesQuery,
  defaultValues,
}: any) => {
  const [categories, setCategories] = useState([]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductCategoryForm>({
    resolver: zodResolver(productCategoriesSchema),
    defaultValues,
  });

  const parent = watch("parent");

  useEffect(() => {
    if (productCategoriesQuery.data) {
      setCategories(
        productCategoriesQuery.data
          .filter((x: any) => x.parent === null)
          .map((x: any) => ({
            _id: x._id,
            productCategory: x.productCategory,
          }))
      );
    }
  }, [productCategoriesQuery]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Product Category Name"
            fullWidth
            {...register("productCategory")}
            error={!!errors.productCategory}
            helperText={errors.productCategory?.message}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Controller
            name="parent"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Autocomplete
                id="parent"
                onChange={(_, item) => onChange(item)}
                value={parent || value}
                options={categories}
                getOptionLabel={(option) => option.productCategory}
                fullWidth
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Parent"
                    helperText={errors.parent?.message}
                    error={!!errors.parent}
                  />
                )}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            placeholder="Product Category Description"
            fullWidth
            multiline
            rows={2}
            {...register("productCatDesc")}
            error={!!errors.productCatDesc}
            helperText={errors.productCatDesc?.message}
          ></TextField>
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

export default ProductCategoryForms;
