import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiSearch, FiSave, FiUser, FiMenu, FiX } from "react-icons/fi"; // Using Feather icons
// Alternatively, you can use these popular sets:
// import { FaHome, FaSearch, FaBookmark, FaUser, FaBars, FaTimes } from "react-icons/fa"; // Font Awesome
// import { HiHome, HiSearch, HiBookmark, HiUser, HiMenu, HiX } from "react-icons/hi"; // Heroicons
// import { MdHome, MdSearch, MdBookmark, MdPerson, MdMenu, MdClose } from "react-icons/md"; // Material Design

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Active link styles
  const activeLinkStyle =
    "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-md px-3 py-2";
  const inactiveLinkStyle =
    "text-white hover:text-gray-400 hover:bg-white/10 rounded-md px-3 py-2";

  // Mobile active link styles
  const mobileActiveLinkStyle =
    "bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg px-4 py-3";
  const mobileInactiveLinkStyle =
    "text-white hover:bg-white/10 rounded-lg px-4 py-3";

  // Navigation items array
  const navItems = [
    { path: "/", icon: FiHome, label: "Home" },
    { path: "/search", icon: FiSearch, label: "Search" },
    { path: "/saved", icon: FiSave, label: "Saved" },
    { path: "/profile", icon: FiUser, label: "Profile" },
  ];

  return (
    <>
      {/* Header Container */}
      <div className="flex justify-between items-center px-4 py-4 md:px-8 lg:px-12 md:py-6 overflow-hidden">
        {/* Logo */}
        {/* <h1 className="text-white text-2xl md:text-3xl font-bold z-1">Filmy Duniya</h1> */}
        <img src="/fav-icon.png" alt="" className="w-12 h-12 object-cover" />
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex gap-2 bg-[#141044] z-10 p-2 rounded-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-center gap-2 transition-all duration-200 ${
                  isActive(item.path) ? activeLinkStyle : inactiveLinkStyle
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${isActive(item.path) ? "text-white" : "text-gray-300"}`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden bg-[#141044] p-3 rounded-md hover:bg-[#1a1955] transition-colors flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6 text-white" />
          ) : (
            <FiMenu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Desktop Auth Buttons - Hidden on mobile */}
        <div className="hidden md:flex gap-3 z-10">
          <Link
            to="/login"
            className="bg-blue-500 px-5 rounded-2xl text-white font-bold cursor-pointer py-2 hover:bg-blue-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2 rounded-2xl text-white hover:text-black font-bold transition-all duration-200 border border-transparent hover:border-white/30"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          ></div>

          {/* Drawer Panel */}
          <div className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-[#141044] to-[#0a0925] shadow-xl p-6 animate-slide-in">
            {/* Drawer Header */}
            <div className="flex justify-between items-center mb-10">
              {/* <h2 className="text-white text-2xl font-bold">Filmy Duniya</h2> */}
              <img
                src="/fav-icon.png"
                alt=""
                className="w-4 h-4 object-cover"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-3 mb-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-4 transition-all duration-200 ${
                      isActive(item.path)
                        ? mobileActiveLinkStyle
                        : mobileInactiveLinkStyle
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isActive(item.path) ? "text-white" : "text-gray-300"}`}
                    />
                    <span className="text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="my-8 border-t border-white/20"></div>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-4">
              <Link
                to="/login"
                className="bg-blue-500 w-full py-3 rounded-xl text-white font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <FiUser className="w-5 h-5" />
                Login
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 w-full py-3 rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>

            {/* App Info (Optional) */}
            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-white/60 text-sm text-center">
                Discover amazing movies & shows
              </p>
              <p className="text-white/40 text-xs text-center mt-2">
                Version 1.0.0
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
