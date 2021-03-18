import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages//auth/Login";
import Signup from "./Pages/auth/Signup";
import PrivateRoute from "./Pages/PrivateRoute";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import Landing from "./Pages/Landing";
import Alert from "./Components/Alert";
import socketIOClient from "socket.io-client";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
// import { usedispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

//import fonts
import "./fonts/AirbnbCerealBlack.ttf";
import "./fonts/AirbnbCerealBold.ttf";
import "./fonts/AirbnbCerealBook.ttf";
import "./fonts/AirbnbCerealExtraBold.ttf";
import "./fonts/AirbnbCerealLight.ttf";
import "./fonts/AirbnbCerealMedium.ttf";
import Homescreen from "./Pages/dashboard/Homescreen";
import { persistStore } from "redux-persist";
// import { Persistor } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import setAuthToken from "./utils/setAuthToken";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const Persistor = persistStore(store);

function App() {


  return (
    <Provider store={store}>
      <Alert />
      <Router>
        <PersistGate persistor={Persistor}>
          <Switch>
            <Route path="/landing" component={Landing} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/" component={Homescreen} />
          </Switch>
        </PersistGate>
      </Router>
    </Provider>
  );
}

export default App;
