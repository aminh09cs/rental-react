import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";
const Home = React.lazy(() => import("../pages/home"));
const Flight = React.lazy(() => import("../pages/flight"));
const Thing = React.lazy(() => import("../pages/thing"));
const Car = React.lazy(() => import("../pages/car"));
const Support = React.lazy(() => import("../pages/support"));

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
        <Route
          path="/flight"
          element={
            <DefaultLayout>
              <Flight />
            </DefaultLayout>
          }
        />
        <Route
          path="/thing"
          element={
            <DefaultLayout>
              <Thing />
            </DefaultLayout>
          }
        />
        <Route
          path="/car"
          element={
            <DefaultLayout>
              <Car />
            </DefaultLayout>
          }
        />
        <Route
          path="/support"
          element={
            <DefaultLayout>
              <Support />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
