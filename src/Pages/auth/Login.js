import React, { useState } from "react";
import "./Login.css";
import Logo from "../../img/Logo-Colored.png";
import Bg from "../../img/futball.jpg";
import validate from "./validateInfo";
import useForm from "./useForm";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { login } from "../../actions/auth";

import Loader from "react-loader-spinner";

function Login() {
  const [loading, setLoading] = useState(false);
  const valuee = { email: "", password: "" };
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    valuee
  );
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  function submitForm() {
    setIsSubmitted(true);
    dispatch(login);
    console.log("nope");
  }

  const handleSubmitt = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(values);
    await dispatch(login(values.email, values.password));
    setLoading(false);

    // console.log("yeskk");
  };

  if (isAuthenticated) return <Redirect to="/league-info" />;

  return (
    <>
      <img src={Bg} alt="" className="bg" />
      <div className="form-container">
        {/* <img src={Logo} alt="" className="img" /> */}
        <h1 className="img ftba">Futboll</h1>
        <form className="form" onSubmit={handleSubmitt}>
        {/* <h1 className="ftba">Futboll</h1> */}
          <h1 className="heading">LOGIN</h1>
          <div className="form-inputs">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email - ajims119@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password - 123456"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button
            className={loading ? "form-input-btn fload" : "form-input-btn"}
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <Loader
                type="Oval"
                color="#fff"
                height={15}
                width={15}
                // timeout={8000} //3 secs
              />
            ) : (
              "login"
            )}
          </button>
        </form>
        <p className="log">
          Don't have an account?{" "}
          <Link className="slink" to="/Signup">
            SignUp here
          </Link>
        </p>
        <p className="log">
          Forgot Your Password click
          <Link className="slink" to="/forgotpassord">
            here
          </Link>
        </p>
      </div>
    </>
  );
}

export default Login;
