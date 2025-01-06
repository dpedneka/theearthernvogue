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
import { Product } from "./schemas";
import DashboardCard from "../components/shared/DashboardCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/api/products";
import { IconHttpDelete, IconPencil } from "@tabler/icons-react";
import { Delete } from "@mui/icons-material";
import Link from "next/link";

const Products = () => {
  // const [products, setProducts] = useState<Product[]>([]);

  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return (
    <DashboardCard title="Product Catalogue">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Link href={"/products/add"}>Add Product</Link>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              {/* <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Product Image
                </Typography>
              </TableCell> */}
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Product Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Category
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Status
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Price
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  MRP
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Quantity
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
            {productsQuery.data?.map((product: any) => (
              <TableRow key={product.productName}>
                <TableCell>
                  <Typography variant="h6">{product.productName}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">
                    {product.category.productCategory}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: `${
                        product.status ? "success.main" : "secondary.main"
                      }`,
                      color: "#fff",
                    }}
                    size="small"
                    label={product.status}
                  ></Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">
                    Rs. {product.productPrice}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">Rs. {product.MRP}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{product.totalQuantity}</Typography>
                </TableCell>

                <TableCell align="right">
                  <Typography variant="h6" style={{ cursor: "pointer" }}>
                    <IconPencil stroke={1.5} size="1.3rem" />
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6" style={{ cursor: "pointer" }}>
                    <Delete />
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

export default Products;
