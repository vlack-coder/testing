import React from "react";
import "./Sidebar.css";
import logo from "../../img/Logo.png";
import { NavLink, useRouteMatch } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";

function Sidebar() {
  const { url, path } = useRouteMatch();
const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <IconContext.Provider
      value={{ color: "rgb(255, 123, 0)"}}
    >
      <div className="sidebar">
        <div className="sidelogo">
          <h1>Futboll</h1>
          {/* <img src={logo} alt="" className="logho" /> */}
        </div>
        <div className="sidenav">
          <ul className="snav">
            {/* <li className="snavitem">
            <NavLink className="nav-links" to="/dashboard/News">
              News
            </NavLink>
          </li> */}
            {/* <li className="snavitem">
              <NavLink className="nav-links" to={"/AnalysisHistory"}>
                Analysis History
              </NavLink>
            </li> */}
            <li className="snavitem">
              <NavLink className="nav-links" to={"/league-info"}>
                League Info
              </NavLink>
            </li>
            <li className="snavitem">
              <NavLink className="nav-links" to={"/news"}>
                News
              </NavLink>
            </li>
            {/* <li className="snavitem">
            <NavLink className="nav-links" to="/dashboard/PlayerComparison">
              Player Comparison
            </NavLink>
          </li>
          <li className="snavitem">
            <NavLink className="nav-links" to="/dashboard/Rankings">
              Rankings
            </NavLink>
          </li>
          <li className="snavitem">
            <NavLink className="nav-links" to="/dashboard/FacialRecognition">
              Facial Recognition
            </NavLink>
          </li>
          <li className="snavitem">
            <NavLink className="nav-links" to="/dashboard/VideoTagging">
              Video Tagging
            </NavLink> */}
            {/* </li> */}
          </ul>
          <h1 className="logout" onClick={handleLogout} >
            Logout <RiLogoutBoxLine />
            {/* Logout <GrLogout /> */}
          </h1>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Sidebar;
