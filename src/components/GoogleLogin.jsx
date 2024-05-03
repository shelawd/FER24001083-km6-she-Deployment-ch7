import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../redux/actions/authActions";

function GoogleLogin ({buttonText}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginWithGoogle = useGoogleLogin({
        onSuccess: (responseGoogle) =>
            dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
    });

    return (
        <button onClick={() => loginWithGoogle()} className="flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-md w-72 px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mx-auto mt-4 mb-4">
        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png" alt="Google Logo" className="h-6 mr-2" />
      {buttonText}
      </button>
    );
  }
  
  export default GoogleLogin;
    