import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./../Home/Homepage";
import IndividualEmail from "../Email/IndividualEmail";
import Sidebar from "../Sidebar/Sidebar";
import EmailList from "../EmailList/EmailList";
import ComposePopupManager from "../ComposePopup/Manager/ComposePopupManager";
import LoginPage from "./../Auth/LoginPage/LoginPage";
import SignupPage from "./../Auth/SignupPage/SignupPage";
import ForgotPasswordPage from "./../Auth/ForgotPasswordPage/ForgotPasswordPage";

const Routing = () => {
  const currentLocation = useLocation();
  const [popups, setPopups] = useState([]);
  const [minimizedPopups, setMinimizedPopups] = useState([]);

  const addPopup = () => {
    if (popups.length + minimizedPopups.length < 4) {
      const newPopup = { id: Date.now() };
      setPopups([...popups, newPopup]);
    }
  };
  return (
    <>
      {currentLocation.pathname.startsWith("/mail") && (
        <Sidebar addPopup={addPopup} />
      )}
      <ComposePopupManager
        addPopup={addPopup}
        popups={popups}
        setPopups={setPopups}
        minimizedPopups={minimizedPopups}
        setMinimizedPopups={setMinimizedPopups}
      />
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/mail" element={<EmailList />} />
        <Route path="/mail/:id" element={<IndividualEmail />} />
        {/* <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/myorders" element={<MyOrderPage />} /> */}
      </Routes>
    </>
  );
};

export default Routing;
