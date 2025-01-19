import React, { useState } from "react";
import {
  // Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Grid2,
  Stack,
  Container,
  CardMedia,
} from "@mui/material";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import DOMPurify from "isomorphic-dompurify";
import Carousel from "@/components/carousels";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const ProductPage = ({ productDetail }: any) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) =>
      type === "increment" ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  // const images = [
  //   "/images/product1.jpg",
  //   "/images/product2.jpg",
  //   "/images/product3.jpg",
  //   "/images/product4.jpg",
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   prevArrow: <ArrowBackIosNewIcon />,
  //   nextArrow: <ArrowForwardIosIcon />,
  // };
  const productDescription = DOMPurify.sanitize(
    productDetail.productDescription
  );

  return (
    <Container maxWidth="xl" style={{ padding: 0 }}>
      <Grid2 container spacing={4} padding={2}>
        {/* Image Carousel */}
        <Grid2
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Carousel images={productDetail.productImage} />
          {/* <CardMedia
            sx={{ height: 380, borderRadius: 2 }}
            image={`${process.env.NEXT_PUBLIC_AMAZON_S3}${productDetail.productImage}`}
            title={`${productDetail.productName}`}
          /> */}
        </Grid2>

        {/* Product Details */}
        <Grid2
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h4" fontWeight="bold">
              {productDetail.productName}
            </Typography>
            <Typography variant="h5" color="green" fontWeight="bold">
              Rs. {productDetail.MRP}
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: productDescription }} />

            {/* Color Options */}
            {/* <Stack direction="row" spacing={2} alignItems="center">
              <Typography>Color:</Typography>
              <Box
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                }}
              />
              <Box
                sx={{
                  width: 25,
                  height: 25,
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  border: "1px solid #000",
                }}
              />
            </Stack> */}

            {/* Quantity and Actions */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography>Quantity:</Typography>
              <Button
                style={{ fontSize: 24, padding: 0, minWidth: 30 }}
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </Button>
              <TextField
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                size="small"
                sx={{ width: 60 }}
              />
              <Button
                style={{ fontSize: 16, padding: 0, minWidth: 30 }}
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </Button>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Button disabled variant="contained" color="success" fullWidth>
                Add to Cart
              </Button>
              <Button disabled variant="outlined" fullWidth>
                Buy Now
              </Button>
            </Stack>

            {/* Actions */}
            <Stack direction="row" spacing={2}>
              <Button startIcon={<CompareArrowsIcon />}>Compare</Button>
              <Button startIcon={<FavoriteBorderIcon />}>
                Add to Wishlist
              </Button>
            </Stack>

            {/* Product Details */}
            <Typography>
              <strong>SKU:</strong>
              {productDetail.SKU}
            </Typography>
            <Typography>
              <strong>Categories:</strong>
              {productDetail.category.productCategory}
            </Typography>
            <Typography>
              <strong>Size:</strong>
              {productDetail.size}
            </Typography>

            {/* Share Options */}
            <Stack direction="row" spacing={2} style={{ alignItems: "center" }}>
              <Typography>Share:</Typography>
              <IconButton>
                <Facebook />
              </IconButton>
              <IconButton>
                <Twitter />
              </IconButton>
              <IconButton>
                <Instagram />
              </IconButton>
              <IconButton>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Stack>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default ProductPage;
