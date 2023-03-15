import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import Homepage from "../components/Homepage/Homepage";
import FooterComp from "../components/pages/Footer";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import PageNotFound from "../components/pages/404";
import AllProducts from "../components/Product/AllProducts";
import { BrowserRouter } from "react-router-dom";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeNavbar />
              <Homepage />
              <FooterComp />
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <HomeNavbar />
              <Login />
              <FooterComp />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <HomeNavbar />
              <Signup />
              <FooterComp />
            </>
          }
        ></Route>
        <Route
          path="/products/:category"
          element={
            <>
              <HomeNavbar />
              <AllProducts />
              <FooterComp />
            </>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
