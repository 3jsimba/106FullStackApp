import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8d', // Soft blue-grey for primary elements
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#ff9800', // Warm amber for secondary highlights
    },
    background: {
      default: '#d8fdff', // Light blue-grey for the background
      paper: '#ffffff', // Clean white for paper elements
    },
    // Additional color customizations can be added here
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          padding: theme.spacing(2),
          borderWidth: "2px",
          borderRadius: "10px",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)", // Subtle shadow for depth
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    // Further component customizations can go here
  },
});

export default theme;
