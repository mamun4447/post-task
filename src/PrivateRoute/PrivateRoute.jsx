import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
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
