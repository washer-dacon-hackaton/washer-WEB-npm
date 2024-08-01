import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Global } from "@emotion/react";
import { GlobalStyle } from "./shared/styles/index.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
