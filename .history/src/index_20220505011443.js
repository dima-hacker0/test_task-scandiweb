import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
import { ApolloProvider, ApolloClient } from "@apollo/client";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
