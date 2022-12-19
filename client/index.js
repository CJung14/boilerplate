import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components";
import store from "./store";
import "../public/styles.css";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
