import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import "./index.css";
import App from "./App";
import { store } from "./redux/store/index.store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF",
      light: "#525252",
    },
  },
  typography: {
    h6: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
      fontSize: "0.875rem",
    },
    subtitle2: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 400,
      fontSize: "0.75rem",
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
