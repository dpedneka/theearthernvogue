"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "@mui/icons-material/MusicNote";
import DiscordIcon from "@mui/icons-material/SportsEsports";
import Logo from "../logo";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      {isMobile ? (
        // Mobile View
        <>
          <Toolbar
            sx={{
              justifyContent: "center",
              backgroundColor: "#fff",
              color: "#ccc",
              paddingTop: "10px",
              lineHeight: 0,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              <Logo />.
            </Typography>
          </Toolbar>
          <Toolbar sx={{ backgroundColor: "#fff" }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 20,
                padding: "0 10px",
                flexGrow: 1,
              }}
            >
              <SearchIcon style={{ color: "#ccc" }} />
              <InputBase
                placeholder="Search for products"
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>
            <IconButton>
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </>
      ) : (
        // Desktop View
        <Toolbar>
          {/* Logo and Navigation */}
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
            >
              <Logo />
            </Typography>
            <Box sx={{ ml: 4, display: "flex", gap: 2 }}>
              <Typography
                variant="body1"
                sx={{ cursor: "pointer", color: "inherit" }}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                sx={{ cursor: "pointer", color: "inherit" }}
              >
                Games
              </Typography>
              <Typography
                variant="body1"
                sx={{ cursor: "pointer", color: "inherit" }}
              >
                Sale
              </Typography>
            </Box>
          </Box>

          {/* Social Media Icons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton color="default">
              <InstagramIcon />
            </IconButton>
            <IconButton color="default">
              <YouTubeIcon />
            </IconButton>
            <IconButton color="default">
              <TikTokIcon />
            </IconButton>
            <IconButton color="default">
              <DiscordIcon />
            </IconButton>
          </Box>

          {/* Search and User Actions */}
          <Box sx={{ ml: 4, display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 20,
                padding: "0 10px",
              }}
            >
              <SearchIcon />
              <InputBase
                placeholder="Search for products"
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>
            <IconButton>
              <AccountCircleIcon />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
