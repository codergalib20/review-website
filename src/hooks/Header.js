import React, { useEffect, useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaWindowClose } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Header = ({ bg, bg2 }) => {
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
  const [menuShow, setmenuShow] = useState(false);
  return (
    <div style={{ zIndex: 100000 }}>
      <div className="container">
        <div className={`${showBg ? `top-0 md:${bg} bg-green-500` : `md:${bg2} bg-green-500  top-0 md:top-5`} header_wrapper shadow-lg drop-shadow-xl  py-2 transition-all duration-300 ease-linear fixed left-0 md:w-full`} style={{ maxWidth: "700px", zIndex: 1000, borderBottomRightRadius: "50px" }}>
          <div className="hidden items-center justify-center md:flex">
            <NavLink className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold px-3`} to="/home">Home</NavLink>
            <NavLink className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold px-3`} to="/review">Review</NavLink>
            <NavLink onClick={() => setmenuShow(!menuShow)} className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold py-3`} to="/blogs">Blogs</NavLink>
            <NavLink className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold px-3`} to="/dashboard">Dashboard</NavLink>
          </div>
          <div className='flex md:hidden'>
            <span onClick={() => setmenuShow(!menuShow)}>
              <BiMenuAltLeft style={{ color: "white", fontSize: "2rem", cursor: "pointer" }} />
            </span>
          </div>
          {menuShow && (
            <div style={{ width: '250px', position: "absolute", left: "0", top: "0" }} className="md:hidden items-center justify-center flex flex-col h-screen bg-green-500 transition-all duration-200 ease-linear relative">
              <div className='absolute top-3 right-3 w-12 h-12 bg-red-700 flex items-center justify-center text-gray-50 text-xl cursor-pointer'
                onClick={() => setmenuShow(!menuShow)}
              >
                <FaWindowClose />
              </div>
              <NavLink onClick={() => setmenuShow(!menuShow)} className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold py-3`} to="/home">Home</NavLink>
              <NavLink onClick={() => setmenuShow(!menuShow)} className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold py-3`} to="/review">Review</NavLink>
              <NavLink onClick={() => setmenuShow(!menuShow)} className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold py-3`} to="/blogs">Blogs</NavLink>
              <NavLink onClick={() => setmenuShow(!menuShow)} className={`${showBg ? "text-gray-900" : "text-gray-50"} text-lg font-bold py-3`} to="/dashboard">Dashboard</NavLink>
            </div>
          )

          }
        </div>
      </div>
    </div>
  );
};

export default Header;