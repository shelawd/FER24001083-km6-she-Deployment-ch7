import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData, logoutUser } from "../redux/actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  const handleLogout = () => {
    const isConfirmed = window.confirm("Apakah kamu yakin logout?");
    if (isConfirmed) {
      dispatch(logoutUser());
    }
  };

  return (
    <div className="bg-[#401F71] pr-5 ps-5 pt-2 flex justify-between items-center">
      {/* kiri */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/filet-ramadhan-kareem/512/alquran-512.png"
            width="50"
            alt="LOGO"
            className="ms-3"
          />
        </Link>
      </div>
      {/* kanan */}
      <div className="hidden md:block">
        {userName ? (
          <div className="flex items-center">
            <p className="inline-block p-2 text-blue-200 mr-2">Welcome, {userName}</p>
            <button
              onClick={handleLogout}
              className="inline-block p-2 text-blue-200 hover:text-blue-100 mr-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="inline-block p-2 bg-yellow-500 hover:bg-yellow-300 rounded  hover:text-yellow-900 mr-2 font-semibold">
              Login
            </Link>
            <Link
              to="/register"
              className="inline-block py-2 px-4    bg-yellow-500 hover:bg-yellow-300 hover:text-yellow-900 rounded transition ease-in duration-150 font-semibold"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
