import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "../src/routes/routes";
import "./index.css";
import "./utils/fontawesome";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className="max-w-[1536px] m-auto">
    <Router />
  </div>
);
