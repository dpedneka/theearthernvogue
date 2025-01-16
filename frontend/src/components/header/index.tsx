"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
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
import Logo from "../logo";
import { Dashboard, FacebookTwoTone, Home, ListAlt } from "@mui/icons-material";

import classes from "./header.module.css";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (open: boolean) => () => {
    setMobileMenuOpen(open);
  };

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      {isMobile ? (
        // Mobile View
        <>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              backgroundColor: "#fff",
              color: "#ccc",
              paddingTop: "10px",
              paddingBottom: "10px",
              lineHeight: 0,
            }}
          >
            <IconButton onClick={toggleMobileMenu(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              <Logo />
            </Typography>
            <IconButton>
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>

          {/* Mobile Menu Drawer */}
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={toggleMobileMenu(false)}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleMobileMenu(false)}
              onKeyDown={toggleMobileMenu(false)}
            >
              <List>
                <ListItem className="shadow">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#f5f5f5",
                      padding: "5px 10px",
                      flexGrow: 1,
                    }}
                  >
                    <SearchIcon style={{ color: "#ccc" }} />
                    <InputBase
                      placeholder="What are you looking for?"
                      sx={{ ml: 1, flex: 1 }}
                    />
                  </Box>
                </ListItem>
                <ListItem className={`${classes.borderBottom}`}>
                  <Home style={{ marginRight: 5, fontSize: 16 }} />
                  <ListItemText
                    className={`${classes.tevListItem}`}
                    primary="Home"
                  />
                </ListItem>
                <ListItem className={`${classes.borderBottom}`}>
                  <ListAlt style={{ marginRight: 5, fontSize: 16 }} />
                  <ListItemText
                    className={`${classes.tevListItem}`}
                    primary="Products"
                  />
                </ListItem>
                <ListItem className={`${classes.borderBottom}`}>
                  <AccountCircleIcon style={{ marginRight: 5, fontSize: 16 }} />
                  <ListItemText
                    className={`${classes.tevListItem}`}
                    primary="My Account"
                  />
                </ListItem>
                <ListItem className={`${classes.borderBottom}`}>
                  <Dashboard style={{ marginRight: 5, fontSize: 16 }} />
                  <ListItemText
                    className={`${classes.tevListItem}`}
                    primary="Wishlist"
                  />
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        // Desktop View
        <Toolbar>
          {/* Logo and Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              paddingY: "5px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}
            >
              <Logo />
            </Typography>
            <Box sx={{ ml: 4, display: "flex", gap: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, 0.54)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Home style={{ marginRight: 3 }} />
                Home
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, 0.54)",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ListAlt style={{ marginRight: 3 }} />
                Products
              </Typography>
              {/* <Typography
                variant="body1"
                sx={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.54)" }}
              >
                Sale
              </Typography> */}
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
              <FacebookTwoTone />
            </IconButton>
          </Box>

          {/* Search and User Actions */}
          <Box sx={{ ml: 4, display: "flex", alignItems: "center", gap: 3 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                padding: "5px 10px",
              }}
            >
              <SearchIcon style={{ color: "#ccc" }} />
              <InputBase
                placeholder="What are you looking for?"
                sx={{ ml: 1, flex: 1 }}
              />
            </Box>
            <IconButton style={{ flexDirection: "column" }}>
              <AccountCircleIcon />
              <div style={{ fontSize: 12 }}>Login</div>
            </IconButton>
            <IconButton style={{ flexDirection: "column" }}>
              <FavoriteBorderIcon />
              <div style={{ fontSize: 12 }}>Wishlist</div>
            </IconButton>
            <IconButton style={{ flexDirection: "column" }}>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartIcon />
              </Badge>
              <div style={{ fontSize: 12 }}>Cart</div>
            </IconButton>
          </Box>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default Header;
