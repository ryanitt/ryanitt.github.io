import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider
    theme={{ colorScheme: "dark" }}
    withGlobalStyles
    withNormalizeCSS
  >
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
      </Routes>
    </HashRouter>
  </MantineProvider>
);