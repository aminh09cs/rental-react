import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "../src/routes/routes";
import { TopBar } from "../src/components/TopBar";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TopBar />
    <Router />
  </React.StrictMode>
);
