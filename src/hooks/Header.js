import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
  }, [])
  const onScrollHandler = e => {
    if (window.scrollY >= 80) {
      setShowBg(true);
    } else {
      setShowBg(false);
    }
  }
  return (
    <div style={{ zIndex: "100000" }}>
      <div className="container">
        <div style={{ width: "100%", maxWidth: "700px" }} className={`${showBg ? "top-0 bg-[white]" : "bg-gray-200 top-5"} header_wrapper shadow-lg drop-shadow-xl flex items-center justify-center py-4 transition-all duration-300 ease-linear bg-transparent fixed left-0`}>
          <NavLink className={`${showBg ? "text-gray-50" : "text-gray-50"} text-lg text-gray-900 font-bold px-3`} to="/home">Home</NavLink>
          <NavLink className={`${showBg ? "text-gray-50" : "text-gray-50"} text-lg text-gray-900 font-bold px-3`} to="/review">Review</NavLink>
          <NavLink className={`${showBg ? "text-gray-50" : "text-gray-50"} text-lg text-gray-900 font-bold px-3`} to="/about">About</NavLink>
          <NavLink className={`${showBg ? "text-gray-50" : "text-gray-50"} text-lg text-gray-900 font-bold px-3`} to="/about">About</NavLink>
          <NavLink className={`${showBg ? "text-gray-50" : "text-gray-50"} text-lg text-gray-900 font-bold px-3`} to="/about">About</NavLink>
          <NavLink className={`${showBg ? "text-gray-50" : "text-gray-50"} text-lg text-gray-900 font-bold px-3`} to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;