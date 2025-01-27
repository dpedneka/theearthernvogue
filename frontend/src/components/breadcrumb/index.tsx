import React from "react";
import { NavigateNext } from "@mui/icons-material";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const BreadCrumb = ({ productName }: any) => {
  const theme = useTheme();
  const breadcrumbs = [
    <Link style={{ color: `#494949`, fontSize: 12 }} key="1" href="/">
      TEV
    </Link>,
    <Link key="2" style={{ color: `#494949`, fontSize: 12 }} href="/">
      Products
    </Link>,
    <Typography key="3" sx={{ color: "#494949", fontSize: 12 }}>
      Buy {productName} at the lowest price!
    </Typography>,
  ];
  return (
    <Breadcrumbs
      separator={<NavigateNext style={{ color: "#494949", fontSize: 12 }} />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default BreadCrumb;
