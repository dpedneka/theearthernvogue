import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import TopBar from "./topbar";
import CenterBar from "./centerbar";
import BottomBar from "./bottombar";

export default function Navbar() {
  return (
    <>
      {/* Top Section */}
      <TopBar />
      <AppBar position="sticky" sx={{ bgcolor: "white", boxShadow: 1 }}>
        {/* Middle Section */}
        <CenterBar />
        {/* Bottom Section */}
        <BottomBar />
      </AppBar>
    </>
  );
}
