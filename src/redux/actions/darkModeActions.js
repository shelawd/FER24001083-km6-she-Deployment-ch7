// import { DARK_MODE } from "../type.js";

// export const handledarkMode = (isdarkMode) => async (dispatch) => {
//   // Menyimpan nilai isdarkMode ke dalam local storage
//   localStorage.setItem("darkmode", isdarkMode);

//   // Mengirimkan nilai isdarkMode sebagai payload ke reducer
//   dispatch({
//     type: DARK_MODE,
//     payload: isdarkMode,
//   });
// };

import { DARK_MODE } from "../type.js";

export const handledarkMode = (e) => async (dispatch) => {
  // getting the true or false value from the parameter and saving that to localstorage
  localStorage.setItem("darkmode", e);

  //dispatch data to reducer to be accessed as payload.action
  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};