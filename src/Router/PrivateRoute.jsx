import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../auth/contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { logged } = useContext(UserContext);
  const location = useLocation();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!logged) {
      setShouldRedirect(true);
    }
  }, [logged]);

  if (shouldRedirect) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
