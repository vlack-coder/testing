import React, { useEffect } from "react";
import {
  Redirect,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "./Homescreen.css";
import VideoAnalysis from "../VideoAnalysis/VideoAnalysis";
import PlayerLibrary from "../PlayerLibrary/PlayerLibrary";
import PlayerDetails from "../PlayerDetails/PlayerDetails";
import AnalysisHistory from "../AnalysisHistory/AnalysisHistory";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import setAuthToken from "../..//utils/setAuthToken";
import socketIOClient from "socket.io-client";
import { getAnalysis } from "../../actions/analysis";

function Homescreen() {
  const { url, path } = useRouteMatch();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    // check for token in LS
    if (token) {
      setAuthToken(token);
    }

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      // if (!token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  useEffect(() => {
    const socket = socketIOClient("http://parallelscore.xyz:5132");
    socket.on("analyzed video", (data) => {
      // console.log("data from backend", data);
      dispatch(getAnalysis(data));
      // console.log('shshs', data.model_data)
    });
  }, []);
  

  console.log('hoomie', path)
  const { user } = useSelector((state) => state.auth);
  return (
      <div className="app__body">
        <Sidebar />
        <div className="homescreen">
          <div className="username">
            {/* Dynamic content for the username */}
            <h1>{user?.lastName} </h1>
          </div>
          <Switch>
            <Route path={"/AnalysisHistory"}>
              <AnalysisHistory />
            </Route>
            <Route path={"/league-info"}>
              <VideoAnalysis />
            </Route>
            <Route path={"/news"}>
              <PlayerLibrary />
            </Route>
            <Route path="/PLayerLibrary">
              <PlayerLibrary />
            </Route>
            <Route path="/PLayerDetails">
              <PlayerDetails />
            </Route>
            <Route path={path}>
              <Redirect to='/AnalysisHistory' />
            </Route>
          </Switch>
        </div>
    </div>
  );
}

export default Homescreen;
