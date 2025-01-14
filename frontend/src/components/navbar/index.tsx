import { AppBar } from "@mui/material";
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
