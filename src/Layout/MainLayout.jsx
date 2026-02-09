import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import bg from "../assets/images/bg.png";

const MainLayout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      {/* <div className='absolute inset-0 z-0 pointer-events-none'>
         <img src={bg} className="w-full img object-cover" alt="" />
      </div> */}
      <div className="md:px-12 sm:px-4 py-3">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
