// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// =========================================================

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

// core styles
import "./scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

const rootElement = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <HomePage />
    </HashRouter>
  </React.StrictMode>
);

if (rootElement) {
  ReactDOM.render(app, rootElement);
}
