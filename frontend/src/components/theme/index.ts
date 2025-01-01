"use client";
// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#795548", // Primary brown
      light: "#a98274", // Light brown
      dark: "#4b2c20", // Dark brown
      contrastText: "#ffffff", // White text for buttons, etc.
    },
    secondary: {
      main: "#FF5722", // Define your secondary color
      light: "#FF8A50",
      dark: "#D84315",
      contrastText: "#ffffff",
    },
    background: {
      default: "#F5F5F5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333",
      secondary: "#777",
    },
  },
  typography: {
    fontFamily: `inherit`,
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  spacing: 8, // Default spacing unit
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners for buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          color: "#ffffff",
        },
      },
    },
  },
});

// This is how to switch themes
// const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => setIsDarkMode(!isDarkMode);

// const lightTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: { main: '#4CAF50' },
//     background: { default: '#F5F5F5' },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     primary: { main: '#81C784' },
//     background: { default: '#303030' },
//   },
// });

export default theme;
