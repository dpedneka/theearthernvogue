"use client";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import { useMutation } from "@tanstack/react-query";
import { getProductDetailsByProductName } from "@/utils/api/products";
import { CircularProgress, Container } from "@mui/material";

const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();

  const productDetailsMutation = useMutation({
    mutationFn: getProductDetailsByProductName,
    onSuccess: (response) => {
      console.log(response);
      setProductDetail(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    if (params && params.productId) {
      console.log(params.productId);
      productDetailsMutation.mutate(params.productId);
    }
  }, [params]);

  if (!params.productId) return notFound();
  else
    return (
      <>
        {!productDetailsMutation.isSuccess && (
          <Container sx={{ p: 20, display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Container>
        )}
        {productDetailsMutation.isSuccess && (
          <ProductPage productDetail={productDetail} />
        )}
      </>
    );
};

export default ProductDetail;
