import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "../styles/navbar.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";

// ------------------ Files

// ------------------- Context

import UserContext from "../context/userContext";

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const userData = useContext(UserContext);
  const toggleCollapse = () => setIsOpen(!isOpen);

  const fetch = async () => {
    try {
      let token = localStorage.getItem("Token");
      if (token) {
        const user = await axios.get("http://localhost:5000/api/auth/user", {
          headers: { "x-auth-token": token }
        });
        if (userData.userData.length === 0) {
          userData.userDispatch({ type: "Add_User", data: user.data });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const logout = () => {
    localStorage.clear();
    userData.userDispatch({ type: "Remove_User" });
    return <Redirect to="/" />;
  };

  return (
    <div>
      <MDBNavbar
        className="fixed-top"
        style={{ backgroundColor: "#3d3d3d" }}
        dark
        expand="md"
      >
        <MDBNavbarBrand>
          <MDBNavLink to="/" className="link">
            <strong className="white-text">bCard</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} className="toggler" />

        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          {userData.userData.length ? (
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#" onClick={logout} className="link">
                  Logout
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/dashboard" className="link">
                  Dashboard
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem></MDBNavItem>
            </MDBNavbarNav>
          ) : (
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/signup" className="link">
                    SignUp
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/signin" className="link">
                  SignIn
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem></MDBNavItem>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
};

export default React.memo(NavBar);
