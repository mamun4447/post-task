import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/ContextProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  if (!user) {
    return navigate("/login");
  }
  return children;
};

export default PrivateRoute;
