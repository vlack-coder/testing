import React from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import "./Landing.css";

const Landing = () => {
  //   if (isAuthenticated) {
  //     return <Redirect to='/dashboard' />;
  //   }

  return (
    <>
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">
            <i className="fas fa-code" /> Futboll
          </Link>
        </h1>

        <ul>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Futboll</h1>
            <p className="lead">
            Get Updates on every league around Europe
            </p>
            <div className="buttons">
              <Link to="/signup" className="botn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="botn btn-light">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
