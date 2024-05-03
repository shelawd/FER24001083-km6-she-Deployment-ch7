import { combineReducers } from "@reduxjs/toolkit";
import suratReducers from "./suratReducers";
import audioReducers from "./audioPlayReducers";
import authReducers from "./authReducers";

export default combineReducers({
  surat: suratReducers,
  auth: authReducers,
  audio: audioReducers,
});
