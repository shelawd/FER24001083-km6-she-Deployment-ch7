import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  token: null,
  isLoggedIn: false,
  user: null,
};
const persistConfig = {
    key: "auth",
    storage: storage,
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

const persistAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const { setToken, setIsLoggedIn, setUser } = authSlice.actions;

export default persistAuthReducer;