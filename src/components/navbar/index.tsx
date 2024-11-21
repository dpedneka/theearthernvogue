import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search, ShoppingCart, AccountCircle } from "@mui/icons-material";
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
        {/* Mobile Bottom Navigation */}
        <Toolbar
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            justifyContent: "space-between",
            bgcolor: "primary.light",
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton>
            <AccountCircle color={"success"} />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              color: "white",
              fontWeight: 600,
            }}
          >
            LOGO
          </Typography>
          <IconButton>
            <ShoppingCart color="success" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
