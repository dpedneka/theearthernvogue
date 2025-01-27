"use client";
// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8B4513", // Brown
      contrastText: "#FFFFFF", // White text for contrast
    },
    secondary: {
      main: "#E2725B", // Terracotta
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FAF9F6", // Off-White
      paper: "#FFFDD0", // Cream
    },
    text: {
      primary: "#333333", // Charcoal
      secondary: "#4B2E2E", // Dark Brown
    },
    // accent: {
    //   main: "#FFD700", // Gold
    // },
    success: {
      main: "#228B22", // Forest Green
    },
    warning: {
      main: "#D2B48C", // Light Brown
    },
  },
  typography: {
    fontFamily: '"Nunito", "Ubuntu", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#4B2E2E",
    },
    h4: {
      fontFamily: '"Ubuntu", "Ubuntu Fallback", sans-serif',
    },
    body1: {
      fontSize: "1rem",
      color: "#333333",
    },
    button: {
      fontWeight: 600,
      color: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          padding: "0px",
        },
      },
    },
  },
});

// export default theme;

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#795548", // Primary brown
//       light: "#a98274", // Light brown
//       dark: "#4b2c20", // Dark brown
//       contrastText: "#ffffff", // White text for buttons, etc.
//     },
//     secondary: {
//       main: "#FF5722", // Define your secondary color
//       light: "#FF8A50",
//       dark: "#D84315",
//       contrastText: "#ffffff",
//     },
//     background: {
//       default: "#F5F5F5",
//       paper: "#ffffff",
//     },
//     text: {
//       primary: "#333",
//       secondary: "#777",
//     },
//   },
//   typography: {
//     fontFamily: `inherit`,
//     h1: {
//       fontSize: "2rem",
//       fontWeight: 600,
//     },
//     h2: {
//       fontSize: "1.75rem",
//       fontWeight: 500,
//     },
//     body1: {
//       fontSize: "1rem",
//     },
//     body2: {
//       fontSize: "0.875rem",
//     },
//   },
//   spacing: 8, // Default spacing unit
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           borderRadius: 8, // Rounded corners for buttons
//         },
//       },
//     },
//     MuiAppBar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#fff",
//           color: "#ffffff",
//         },
//       },
//     },
//   },
// });

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
