import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { authChecking } from "./redux/action/action";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Forgotpassword from  "./pages/Auth/forgot"
import Unauth from "./pages/Auth/UnAthrise";
import Cart from "./pages/cart/cart";
import ProductList from "./pages/product/productlist";
import Productdetail from "./pages/product/productDetail";
import Payment from "./pages/payment/payment";
import PaymentSuccess from "./pages/payment/paymentsuccess";
import "./App.css";

function App() {
  const checkflag = useSelector((state) => state.isUserLoggedIn);
  const dispatch = useDispatch();
  console.log(import.meta.env.VITE_STRIPE_CHECKOUT_API)
  useEffect(() => {
    const token = JSON.parse(
      sessionStorage.getItem(window.sessionStorage.key(0))
    );
    if (token) {
      dispatch(
        authChecking({
          email: token.email,
          flag: true,
        })
      );
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={checkflag.islogin === false ? <Unauth /> : <Cart />}
        />
        <Route path="/product/detail/:id" element={<Productdetail />} />
        <Route path="*" element={<h1>page is not found</h1>} />
        <Route path="/forgot/password" element={<Forgotpassword />} />
        <Route path="/add-address/payment" element={<Payment />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </>
  );
}

export default App;