import { setIsLoggedIn, setToken, setUser } from "../reducers/authReducers";
import axios from "axios";
import { toast } from "react-toastify";

export const registerLoginWithGoogle =
  (accessToken, navigate) => async (dispatch) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API}/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));
      dispatch(setIsLoggedIn(true));
      dispatch(getMe(null, null, null));

      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

export const logout = (navigate) => (dispatch) => {
  try {
    dispatch(setToken(null));
    dispatch(setIsLoggedIn(false));
    dispatch(setUser(null));

    if (navigate) navigate("/");
  } catch (error) {
    toast.error(error?.message);
  }
};

export const getMe =
  (navigate, navigatePath, navigatePathError) => async (dispatch, getState) => {
    try {
      const { token } = getState().auth;

      if (!token) return;

      const response = await axios.get(
        `${import.meta.env.VITE_API}/v1/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data.data;

      dispatch(setUser(data));

      if (navigatePath) navigate(navigatePath);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response.status === 401) {
          dispatch(logout(null));

          if (navigatePathError) navigate(navigatePathError);
          return;
        }

        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

export const login = (data, navigate) => async (dispatch) => {
  try {
    let config = {
      method: "post",
      url: `${import.meta.env.VITE_API}/v1/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    const { token } = response.data.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    dispatch(getMe(null, null, null));

    toast.success("Berhasil Login!");
    navigate("/home");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const register = (data, navigate) => async (dispatch) => {
  try {
    
    let config = {
      method: "post",
      url: `${import.meta.env.VITE_API}/v1/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
      
    };
    console.log("Data", data);

    const response = await axios.request(config);
    console.log('response:', response);

    
    const { token } = response.data.data;

    dispatch(setToken(token));
    dispatch(setIsLoggedIn(true));
    dispatch(getMe(null, null, null));

    toast.success("Berhasil Registrasi!");
    navigate("/login");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    console.error("Error:", error);
  }
};