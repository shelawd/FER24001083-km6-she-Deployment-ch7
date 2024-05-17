import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { handledarkMode } from "../redux/actions/darkModeActions";
import "../app.css"; 

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { isdarkMode } = useSelector((state) => state.darkMode);

  const [showNavMenu, setShowNavMenu] = useState(false);

  useEffect(() => {
    dispatch(getMe(null));
  }, [dispatch]);

  const handleLogout = () => {
    confirmAlert({
      title: 'Konfirmasi Logout',
      message: 'Apakah kamu yakin ingin logout?',
      buttons: [
        {
          label: 'Ya',
          onClick: () => {
            dispatch(logout(() => navigate("/")));
          }
        },
        {
          label: 'Tidak',
          onClick: () => {}
        }
      ]
    });
  };

  const switchDarkMode = () => {
    dispatch(handledarkMode(!isdarkMode));
  };

  useEffect(() => {
    document.body.className = isdarkMode ? "dark-mode" : "light-mode";
  }, [isdarkMode]);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <div className="bg-[#401F71] pr-5 ps-5 pt-2 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/filet-ramadhan-kareem/512/alquran-512.png"
            width="50"
            alt="LOGO"
            className="ms-3"
          />
        </Link>
        <p className={`inline-block p-2 md:text-xl font-semibold text-blue-200 ms-3 ${isLoggedIn ? '' : 'hidden'}`}>
          Welcome, {user?.name}👋
        </p>
      </div>

      <div className="flex items-center">
        <div id="darkmode">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={switchDarkMode}
            checked={isdarkMode}
          />
          <label htmlFor="checkbox" className="label">
            <BsMoonStarsFill color="white" />
            <BsFillSunFill color="yellow" />
            <div className="ball"></div>
          </label>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavMenu} className="text-blue-200 p-2 focus:outline-none">
            <svg
              className="w-6 h-6 ms-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Sidebar */}
        <div className={`md:hidden absolute top-16 right-0 ${showNavMenu ? 'block' : 'hidden'}`}>
          <div className="bg-gray-800 p-4">
            <Link to="/home" className="text-white block p-2 hover:bg-gray-700">Home</Link>
            <Link to="/about" className="text-white block p-2 hover:bg-gray-700">About</Link>
            {isLoggedIn && (
              <button onClick={handleLogout} className="text-white block p-2 hover:bg-gray-700">
                Logout
              </button>
            )}
            {!isLoggedIn && (
              <>
                <Link to="/login" className="text-white block p-2 hover:bg-gray-700">Login</Link>
                <Link to="/register" className="text-white block p-2 hover:bg-gray-700">Sign Up</Link>
              </>
            )}
          </div>
        </div>

        {/* Menu on Desktop */}
        <div className="hidden md:flex">
          <Link to="/home" className="text-blue-200 p-2 hover:text-blue-100 mr-2 ms-4">Home</Link>
          <Link to="/about" className="text-blue-200 p-2 hover:text-blue-100 mr-2">About</Link>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="inline-block p-2 text-blue-200 hover:text-blue-100 mr-2">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="inline-block p-2 bg-yellow-500 hover:bg-yellow-300 rounded hover:text-yellow-900 mr-2 font-semibold">
                Login
              </Link>
              <Link
                to="/register"
                className="inline-block py-2 px-4 bg-yellow-500 hover:bg-yellow-300 hover:text-yellow-900 rounded transition ease-in duration-150 font-semibold"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
