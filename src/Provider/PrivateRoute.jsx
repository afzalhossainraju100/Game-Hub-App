import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading/Loading.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/auth/login" replace />;
};

export default PrivateRoute;
