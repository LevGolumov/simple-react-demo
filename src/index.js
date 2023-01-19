import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import LocaleContextProvider from "./context/LocaleContextProvider";
import NamingContextProvider from "./context/NamingContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <LocaleContextProvider>
      <NamingContextProvider>
        <App />
      </NamingContextProvider>
    </LocaleContextProvider>
  </BrowserRouter>
);
