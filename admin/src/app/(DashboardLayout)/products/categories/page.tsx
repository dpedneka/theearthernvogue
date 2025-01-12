"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProductCategories,
  getAllProductCategories,
} from "@/api/products";
import { IconPencil } from "@tabler/icons-react";
import { Delete } from "@mui/icons-material";
import Link from "next/link";
import DashboardCard from "../../components/shared/DashboardCard";
import { useRouter } from "next/navigation";

const ProductCategories = () => {
  const productCategoriesQuery = useQuery({
    queryKey: ["productCategories"],
    queryFn: getAllProductCategories,
  });

  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProductCategories,
    onSuccess: (response) => {
      console.log(response);
      queryClient.invalidateQueries({ queryKey: ["deleteProduct"] });
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onDeleteHandler = (productId: any) => {
    deleteProductMutation.mutate(productId);
  };

  console.log(productCategoriesQuery.data);

  return (
    <DashboardCard title="Product Categories">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Link href={"/products/categories/add"}>Add a Category</Link>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Product Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Category Description
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Parent
                </Typography>
              </TableCell>
              <TableCell align="right" colSpan={2}>
                <Typography variant="subtitle2" fontWeight={600}>
                  Actions
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productCategoriesQuery.data?.map((product: any) => (
              <TableRow key={product.productCategory}>
                <TableCell>
                  <Typography variant="h6" style={{ fontWeight: 400 }}>
                    {product.productCategory}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" style={{ fontWeight: 400 }}>
                    {product.productCatDesc}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" style={{ fontWeight: 400 }}>
                    {product.parent ? product.parent.productCategory : "Parent"}
                  </Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h6" style={{ cursor: "pointer" }}>
                    <Link
                      href={`/products/categories/update?editId=${product._id}`}
                    >
                      <IconPencil stroke={1.5} size="1.3rem" />
                    </Link>
                    {/* <IconPencil stroke={1.5} size="1.3rem" /> */}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" style={{ cursor: "pointer" }}>
                    <Delete onClick={() => onDeleteHandler(product._id)} />
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductCategories;
