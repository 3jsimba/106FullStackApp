import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A subtle blue for primary actions and elements
      contrastText: '#fff', // White text on primary color
    },
    secondary: {
      main: '#dc004e', // A soft pink for secondary actions and highlights
    },
    background: {
      default: '#f5f5f5', // Light grey background for a modern look
      paper: '#fff', // White background for paper elements
    },
    // Add more color customizations here
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
          boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)", // subtle shadow for depth
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
    // Add more component styles here
  },
});

export default theme;
