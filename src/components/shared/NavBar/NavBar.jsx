import { useState } from "react";
import { FaHamburger, FaList, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="relative">
      <div className="w-full md:w-5/6 mx-auto hidden md:block  ">
        <nav className=" z-50 p-4 rounded-md flex justify-between items-center ">
          <h2 className="flex items-center gap-2 cursor-pointer">
            <FaHamburger className="text-[#F58D00] text-xl"></FaHamburger>{" "}
            <span className="font-bold text-xl text-[#F17228] ">Pasta</span>
            <span className="font-bold text-xl text-[#FFB30E]">Club</span>
          </h2>
          <div className="flex gap-3 font-semibold text-[#F17228]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
            <Link to="/">User Profile Pictur</Link>
          </div>
        </nav>
      </div>
      <div className="p-4 md:hidden shadow-md rounded-md flex justify-between items-center">
        <h2 className="flex items-center gap-2">
          <FaHamburger className="text-[#F58D00] text-xl"></FaHamburger>{" "}
          <span className="font-bold text-xl text-[#F17228] ">Pasta</span>
          <span className="font-bold text-xl text-[#FFB30E]">Club</span>
        </h2>
        <div onClick={handleMenu}>
          {menu ? (
            <FaTimes className="text-xl text-[#F17228]"></FaTimes>
          ) : (
            <FaList className="text-xl text-[#F17228]"></FaList>
          )}
        </div>
      </div>
      {menu && (
        <div className="absolute inset-y-16 left-0 w-full max-h-min bg-[#FFCD1E] p-5">
          <ul className="text-center font-bold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
