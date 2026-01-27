import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";


const Roots = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
