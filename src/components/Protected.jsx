import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";
import { toast } from "react-toastify";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
        toast.error("Silakan login terlebih dahulu!");
      return navigate("/");
    } else {
      dispatch(getMe(navigate, null, "/"))
    }

  }, [navigate, dispatch, token]);

  if(!token) {
  return children;
  }

  return children;
}

export default Protected;