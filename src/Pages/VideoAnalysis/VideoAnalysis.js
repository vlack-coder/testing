import React from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import "./VideoAnalysis.css";
import AnalysisDetails from "./AnalysisDetails/AnalysisDetails";
import Events from "./Events/Events";
import PlayerList from "./PlayerList/PlayerList";
import TeamMetrics from "./TeamMetrics/TeamMetrics";

function VideoAnalysis() {
  const { url, path } = useRouteMatch();
  return (
    // <div>
    <nav className="hcontainer">
      <ul className="hnav">
        <li className="hnavitem">
          <NavLink className="hnav-links" to={`${url}/standings`}>
            Standings
          </NavLink>
        </li>
        <li className="hnavitem">
          <NavLink className="hnav-links" to={`${url}/Events`}>
            League Stats
          </NavLink>
        </li>
        {/* <li className="hnavitem">
          <NavLink className="hnav-links" to={`${url}/PlayerList`}>
            Player List
          </NavLink>
        </li>
        <li className="hnavitem">
          <NavLink className="hnav-links" to={`${url}/TeamMetrics`}>
            Team Metrics
          </NavLink>
        </li> */}
      </ul>

      <div className="hicontainer">
        <Switch>
          <Route path={`${url}/standings`}>
            <AnalysisDetails />
          </Route>
          <Route path={`${url}/Events`}>
            <Events />
          </Route>
          <Route path={`${url}/PlayerList`}>
            <PlayerList />
          </Route>
          {/* <Route path={`${url}/PlayerList`}>
            <PlayerList />
          </Route>
          <Route path={`${url}/TeamMetrics`}>
            <TeamMetrics />
          </Route> */}
          <Route path={path}>
            <Redirect to={`${url}/standings`} />
          </Route>
        </Switch>
      </div>
    </nav>
    // </div>
  );
}

export default VideoAnalysis;
