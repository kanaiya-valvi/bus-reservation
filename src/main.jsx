import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
