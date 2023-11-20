import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";
//import { Home } from "../pages/home";
const Home = React.lazy(() => import("../pages/home"));

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
