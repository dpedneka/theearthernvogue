import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "200px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image
        src="/images/logos/TEV_logo.webp"
        alt="logo"
        height={70}
        width={195}
        priority
      />
    </LinkStyled>
  );
};

export default Logo;
