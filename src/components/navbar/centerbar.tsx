import { Toolbar, Box, IconButton, Button } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import Logo from "../logo";

const CenterBar = () => {
  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: { xs: "none", sm: "flex" } }}
        flex={1}
        justifyContent="center"
      ></Box>
      <Box display="flex" flex={1} justifyContent="center" sx={{ padding: 1 }}>
        <Logo />
      </Box>
      <Box
        sx={{ display: { xs: "none", sm: "flex" } }}
        flex={1}
        alignItems="center"
        justifyContent="flex-end"
        gap={1}
      >
        <Button startIcon={<AccountCircle />} color="primary" variant="text">
          Account
        </Button>
        <IconButton color="primary">
          <ShoppingCart />
        </IconButton>
      </Box>
    </Toolbar>
  );
};

export default CenterBar;
