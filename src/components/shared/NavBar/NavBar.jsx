import { useContext, useState } from "react";
import { FaHamburger, FaList, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="relative shadow-md rounded-md">
      <div className="w-full md:w-5/6 mx-auto hidden md:block  ">
        <nav className=" z-50 p-4 rounded-md flex justify-between items-center ">
          <h2>
            <Link to="/" className="flex items-center gap-2">
              <FaHamburger className="text-[#F58D00] text-xl "></FaHamburger>{" "}
              <span className="font-bold text-xl text-[#F17228] ">Pasta</span>
              <span className="font-bold text-xl text-[#FFB30E]">Club</span>
            </Link>
          </h2>
          <div className="flex items-center gap-3 font-semibold text-[#F17228]">
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

            {user ? (
              <div className="flex items-center gap-3">
                <Link onClick={logOut}>Sign Out</Link>
                {user.photoURL ? (
                  <div className="group flex relative">
                    <img
                      className="w-8 h-8 rounded-full cursor-pointer"
                      src={user.photoURL}
                      alt=""
                    />
                    <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 mt-5 mx-auto py-1 px-2 w-28 text-center">
                      {user.displayName}
                    </span>
                  </div>
                ) : (
                  <Link>
                    <FaUserCircle className="w-8 h-8"></FaUserCircle>
                  </Link>
                )}
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            )}
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
        <div className="z-50 absolute inset-y-16 left-0 w-full max-h-min bg-[#FFCD1E] p-5 text-white">
          <ul className="text-center font-bold">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
            <li>
              {user ? (
                <div className="flex flex-col justify-center items-center gap-3">
                  <Link onClick={logOut}>Sign Out</Link>
                  {user.photoURL ? (
                    <div className="group flex relative">
                      <img
                        className="w-8 h-8 rounded-full cursor-pointer"
                        src={user.photoURL}
                        alt=""
                      />
                      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute left-1/2  -translate-x-1/2 translate-y-full opacity-0 mt-5 mx-auto py-1 px-2 w-28 text-center">
                        {user.displayName}
                      </span>
                    </div>
                  ) : (
                    <Link>
                      <FaUserCircle className="w-8 h-8"></FaUserCircle>
                    </Link>
                  )}
                </div>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
