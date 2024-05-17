// requireAuth.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children, redirectTo = "/", inverse = false }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (inverse) {
    // Pengguna sudah login dan mencoba mengakses halaman login/register
    if (isLoggedIn) {
      return <Navigate to={redirectTo} />; // Arahkan ke halaman utama atau halaman lain
    }
  } else {
    // Pengguna belum login dan mencoba mengakses halaman 
    if (!isLoggedIn) {
      return <Navigate to="/login" />; // Arahkan ke halaman login
    }
  }

  return children;
};

export default RequireAuth;
