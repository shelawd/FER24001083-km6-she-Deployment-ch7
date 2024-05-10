import { combineReducers } from "@reduxjs/toolkit";
import suratReducers from "./suratReducers";
import authReducers from "./authReducers";

export default combineReducers({
  surat: suratReducers,
  auth: authReducers,
});
