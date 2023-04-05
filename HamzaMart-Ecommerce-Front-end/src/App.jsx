import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import RootLayout from "./components/Layout/RootLayout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

let router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/products" element={<Shop />}></Route>
      <Route path="/about" element={<About/>}></Route>
  </Route>)
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
