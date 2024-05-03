import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
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
        {isLoggedIn ? (
          <div className="flex items-center">
            <p className="inline-block p-2 text-blue-200 mr-2">Welcome, {user?.name} </p>
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
