import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../auth/contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { logged } = useContext(UserContext);

  return logged ? children : <Navigate to="/main" replace />;
};

export default PrivateRoute;
