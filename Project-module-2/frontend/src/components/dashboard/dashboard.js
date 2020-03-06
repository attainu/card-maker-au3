import React from "react";
import NavBar from "../navbar";
import { Link } from "react-router-dom";

function DashBoard(props) {
  return (
    <React.Fragment>
      <NavBar />
      <br />
      <br />
      <Link to="/dashboard/new/jade" />
    </React.Fragment>
  );
}

export default DashBoard;
