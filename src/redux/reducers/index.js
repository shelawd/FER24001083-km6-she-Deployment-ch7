import { combineReducers } from "@reduxjs/toolkit";
import suratReducers from "./suratReducers";
import authReducers from "./authReducers";
import darkModeReducers from "./darkModeReducers";

export default combineReducers({
  surat: suratReducers,
  auth: authReducers,
  darkMode: darkModeReducers,
});
