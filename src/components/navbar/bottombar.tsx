import { Toolbar, Box, Button, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import Link from "next/link";

const BottomBar = () => {
  return (
    <Toolbar
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        px: 2,
        color: "primary.dark",
        minHeight: "50px !important",
      }}
    >
      {/* Links/Menu */}
      <Box display="flex" gap={2} sx={{ display: { xs: "none", md: "flex" } }}>
        <Link href={"#"}>Home</Link>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Services</Link>
        <Link href={"#"}>Contact</Link>
      </Box>

      {/* Search Bar */}
      <Box
        display="flex"
        bgcolor={"white"}
        width={"300px"}
        height={"40px"}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <TextField
          size="small"
          placeholder="Search..."
          sx={{
            bgcolor: "white",
            borderRadius: "0px !important",
            height: "30px !important",
            padding: "0px !important",
            flex: 1,
            outline: "none",
          }}
        />
        <Box
          display="flex"
          bgcolor={"grey"}
          width={"40px"}
          height={"40px"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Search sx={{ color: "white" }} />
        </Box>
      </Box>
    </Toolbar>
  );
};

export default BottomBar;
