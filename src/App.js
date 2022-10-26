import React from "react";
import WebFont from "webfontloader";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Header, Footer, NotFound } from "./components";
import {
  Home,
  Login,
  Register,
  Account,
  ForgotPassword,
  ResetPassword,
  UpdatePassword,
  UpdateProfile,
  Cart,
  Shipping,
  Payment,
} from "./pages";

import {
  OrderConfirm,
  OrderSuccess,
} from "./pages/Order";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto:300,400,500,600,700"],
      },
    });
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<OrderConfirm />} />
        <Route
          path="/orders/success"
          element={<OrderSuccess success={true} />}
        />
        <Route
          path="/orders/failed"
          element={<OrderSuccess success={false} />}
        />
        <Route path="/process/payment" element={<Payment />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account/update"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password/update"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
