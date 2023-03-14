import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeNavbar from "../components/HomeNavbar/HomeNavbar";
import Homepage from "../components/Homepage/Homepage";
import FooterComp from "../components/pages/Footer";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import PageNotFound from "../components/Product/404";
import NewProduct from "../components/Product/NewProduct";
import SingleProduct from "../components/Product/SingleProduct";
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
          path="/newarrival"
          element={
            <>
              <HomeNavbar />
              <NewProduct />
              <FooterComp />
            </>
          }
        ></Route>
        <Route
          path="/products/:id"
          element={
            <>
              <HomeNavbar />
              <SingleProduct />
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
