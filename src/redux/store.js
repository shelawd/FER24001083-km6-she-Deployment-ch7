import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducers from "./reducers";

export default configureStore({
    reducer: rootReducers,
    devTools: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});