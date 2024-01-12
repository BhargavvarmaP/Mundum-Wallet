import React from "react";
import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App"; // Replace with your main component
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bf",
    },
    secondary: {
      main: "#000",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
