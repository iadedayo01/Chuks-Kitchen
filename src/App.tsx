// import React from 'react'

import { Route, Routes, useLocation } from "react-router-dom";
import Onboarding from "./PAGES/Onboarding";
import Navbar from "./Shared/Navbar";
import Homepage from "./PAGES/Homepage";
import ExplorePage from "./PAGES/ExplorePage";
import SignIn from "./PAGES/SignIn";
import SignUp from "./PAGES/SignUp";
import Footer from "./Shared/Footer";
import MyOrders from "./PAGES/MyOrders";
import ProductInfo from "./PAGES/ProductInfo";

const App = () => {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <div className=" font-['Inter'] h-full">
      {pathname != "/" && pathname != "/signin" && pathname != "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/explore/product-info/:id" element={<ProductInfo />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
