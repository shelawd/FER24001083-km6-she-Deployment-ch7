// requireAuth.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate

const RequireAuth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate(); // Gunakan useNavigate

  // Jika pengguna belum login, arahkan ke halaman login
  if (!isLoggedIn) {
    navigate("/login"); // Gunakan navigate untuk navigasi
    return null; // Kembalikan null agar komponen tidak dirender
  }

  // Jika pengguna sudah login, tampilkan halaman yang diminta
  return children;
};

export default RequireAuth;
