import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();
  const role = localStorage.getItem("etinRole");

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("etinRole");
    navigate("/login");
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <>
      <div>
        <nav
          className={`fixed top-0 left-0 w-full z-50 px-10 py-4 flex justify-between items-center transition-all duration-300 ${
            navbarBg ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <Link className="text-3xl font-bold leading-none" to="#">
            <img src="./e-Return.png" className="w-12" alt="e-Return" />
          </Link>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <NavLink
                exact
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>

            {isUserSignedIn && (
              <>
                <li>
                  {role === "Admin" && (
                    <NavLink
                      className={({ isActive }) =>
                        `text-sm transition-colors duration-200 ${
                          isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                        }`
                      }
                      to="/admin"
                    >
                      Dashboard
                    </NavLink>
                  )}

                  {role === "Organization" && (
                    <NavLink
                      className={({ isActive }) =>
                        `text-sm transition-colors duration-200 ${
                          isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                        }`
                      }
                      to="/organization"
                    >
                      Dashboard
                    </NavLink>
                  )}

                  {role === "Taxpayer" && (
                    <NavLink
                      className={({ isActive }) =>
                        `text-sm transition-colors duration-200 ${
                          isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                        }`
                      }
                      to="/dashboard"
                    >
                      Dashboard
                    </NavLink>
                  )}
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
              </>
            )}

            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                  }`
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                  }`
                }
                to="/thirdParty"
              >
                Third Party TIN Verification
              </NavLink>
            </li>
            <li className="text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4 current-fill"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive ? "text-[#2563eb] font-bold" : "text-gray-400"
                  }`
                }
                to="/contactus"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {isUserSignedIn ? (
            <button
              onClick={handleSignOut}
              className="hidden lg:inline-block py-2 px-6 bg-red-500 hover:bg-red-600 text-sm text-white font-bold rounded-xl transition duration-200"
            >
              Sign Out
            </button>
          ) : (
            <Link
              className="hidden lg:inline-block py-2 px-6 bg-[#2563eb] hover:bg-[#2563eb] text-sm text-white font-bold rounded-xl transition duration-200"
              to="/login"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
