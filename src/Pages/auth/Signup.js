import React, { useState } from "react";
import "./Login.css";
import Logo from "../../img/Logo-Colored.png";
// import Bg from "../../img/Background.png";
import Bg from "../../img/futball.jpg";
import validate from "./validateInfo";
import useForm from "./useForm";
import { Link, Redirect } from "react-router-dom";
// import Login from "./Login"
import { register } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";

function Signup() {
  const valuee = {
    username: "",
    email: "",
    password: "",
    password2: "",
    phone: "",
  };
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
    valuee
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function submitForm() {
    dispatch(
      register(values.email, values.password, values.username, values.phone)
    );
    setIsSubmitted(true);
  }
  const dispatch = useDispatch();
  const handleSubmitt = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(
      register(values.email, values.password, values.username, values.phone)
    );

    // console.log("yeskk");
  };

  if (isSubmitted) {
    console.log("sumitted");
    return <Redirect to="/login" />;
  }
  return (
    // <div className="login-container">
    <>
      <img src={Bg} alt="" className="bg" />
      <div className="form-container">
        <h1 className="img ftba">Futboll</h1>
        {/* <img src={Logo} alt="" className="img" /> */}
        <form className="form" onSubmit={handleSubmitt}>
          <h1 className="heading">SIGN UP</h1>
          <div className="form-inputs">
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Full Name"
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="phone"
              name="phone"
              placeholder="Phone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <div className="form-inputs">
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirm your password"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p>{errors.password2}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Create a Free Account
          </button>
        </form>
        <p className="log">
          Already have an account?{" "}
          <Link className="slink" to="/Login">
            Login here
          </Link>
        </p>
      </div>
    </>
  );
}

export default Signup;
