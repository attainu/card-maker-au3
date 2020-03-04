import React, { useState, useContext } from "react";
import axios from "axios";
import { MDBIcon } from "mdbreact";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBAlert
} from "mdbreact";

import "../styles/modal.css";
import "../styles/login.css";
import Navbar from "./navbar";
import userContext from "../context/userContext";

const FormPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorData, setErrorData] = useState({ errorMessage: "true" });
  const users = useContext(userContext);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const token = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password
      });
      if (token) {
        localStorage.setItem("Token", token.data);
        const userData = await axios.get(
          "http://localhost:5000/api/auth/user",
          { headers: { "x-auth-token": token.data } }
        );
        users.userDispatch({ type: "Add_User", data: userData.data });
        props.history.push(`/`);
      } else {
        alert("None");
      }
    } catch (error) {
      setErrorData({ errorMessage: error.response.data });
      console.log(error.response);
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <br />
      <br />
      <br />
      <img
        src="https://www.mywaste.care/Content/img/login-background.jpg"
        alt="bg"
        className="bg"
      ></img>

      <MDBRow>
        <MDBCol md="8">
          <MDBCard
            className="cardclass offset-md-7"
            style={{ backgroundColor: "rgb(62,39,35,.1)" }}
          >
            <MDBCardBody>
              <div className="text-center">
                <h3 className="pink-text mb-5">
                  <strong style={{ color: "#003366" }}>Log in</strong>
                  <hr />
                </h3>
              </div>
              {errorData.errorMessage === "true" ? (
                ""
              ) : (
                // <MDBContainer>
                <MDBAlert color="warning">{errorData.errorMessage}</MDBAlert>
                // </MDBContainer>
              )}

              <div class="md-form">
                <input
                  style={{ borderRadius: "3px" }}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  id="inputMDEx"
                  className="form-control"
                />
                <label for="inputMDEx" className="emaillabel">
                  Email
                </label>
              </div>
              <div className="md-form">
                <input
                  style={{ borderRadius: "3px" }}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  id="inputpass"
                  className="form-control"
                />
                <label for="inputpass" className="emaillabel">
                  Password
                </label>
              </div>

              <MDBBtn className="loginbtn" rounded block onClick={handleSubmit}>
                Log in
              </MDBBtn>
            </MDBCardBody>

            <div className="footer pt-3 transparent">
              <MDBRow className="d-flex justify-content-center">
                <p
                  className="font-small mb-2 pt-3"
                  style={{ color: "#003366" }}
                >
                  or Log in with
                </p>
              </MDBRow>
              <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                  <MDBIcon icon="facebook-f" fab size="lg"></MDBIcon>
                </a>
                <a href="#!" className="fa-lg p-2 m-2 tw-ic">
                  <MDBIcon fab icon="twitter" size="lg"></MDBIcon>
                </a>
                <a href="#!" className="fa-lg p-2 m-2 gplus-ic">
                  <MDBIcon fab icon="google-plus-g" size="lg"></MDBIcon>
                </a>
              </MDBRow>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default FormPage;
