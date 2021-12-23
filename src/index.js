import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./routes/AppRoutes";

import theme from "./theme";
import "./index.css";

import store from "./store";


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
