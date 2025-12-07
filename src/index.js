// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
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

/**
 * Use ReactDOM.render for compatibility with environments that still have
 * React 17-era dependencies installed. React 18 supports this API for
 * backward compatibility, so the app can start even if `react-dom/client`
 * is unavailable locally.
 */
if (rootElement) {
  ReactDOM.render(app, rootElement);
}
