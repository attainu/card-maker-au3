import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./dashboard.css";

const Sidenav = () => {
  return (
    <div>
      <div
        id="mySidenav"
        className="sidenav mt-5 col-md-4"
        style={{ width: "250px" }}
      >
        <NavLink
          to="/dashboard/new/jade"
          activeStyle={{
            color: "purple"
          }}
        >
          Add Card
        </NavLink>
        <Link to="/dashboard/:id/analytics">Analytics</Link>
        <Link to="/dashboard/:id/showallcard">Show all card</Link>
        <Link to="#">Contact</Link>
      </div>
    </div>
  );
};

export default Sidenav;
