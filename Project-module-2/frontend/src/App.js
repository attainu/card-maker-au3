import React, { useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// -------------------------------- Component FIle -----------------------------

import Signup from "./components/signup";
import Verify from "./components/verify";
import Homepage from "./components/homepage";
import Signin from "./components/login";
import JadeForm from "./components/dashboard/jadeForm";
import Dashboard from "./components/dashboard/dashboard";
import "./styles/App.css";

// ----------------------------- Context ----------------------------
import UserContext from "./context/userContext";

// --------------------------- Reducers ------------------------
import UserReducer from "./reducers/userReducer";

function App() {
  const [userData, userDispatch] = useReducer(UserReducer, []);
  return (
    <div>
      <UserContext.Provider value={{ userData, userDispatch }}>
        <Router>
          <Route path="/signup" component={Signup} />
          <Route path="/:id/verify" component={Verify} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/new/jade" component={JadeForm} />
        </Router>
      </UserContext.Provider>
    </div>
  );
}
export default App;
