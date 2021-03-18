import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
import useForm from "./auth/useForm";
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);
  // useEffect(() => {
  //   if (!isAuthenticated) console.log("ooh");
  // }, [isAuthenticated]);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
