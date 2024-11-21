import { Call, Email, WhatsApp } from "@mui/icons-material";
import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          height: "35px",
          minHeight: "35px !important",
          bgcolor: "primary.dark",
          px: 2,
        }}
      >
        <Container
          sx={{
            justifyContent: "space-between",
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            <Call /> +91-9876543210
          </Typography>
          <Typography variant="body2">
            <WhatsApp />
            Chat With Us
          </Typography>
          <Typography variant="body2">
            <Email />
            support@theearthervogue.com
          </Typography>
          <Typography variant="body2">Track Your Order</Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
