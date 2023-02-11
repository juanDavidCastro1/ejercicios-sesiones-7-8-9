import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="main__container"><App /></div>
  </React.StrictMode>
);
