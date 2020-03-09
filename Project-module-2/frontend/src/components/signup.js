import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBJumbotron } from "mdbreact";
import { MDBContainer, MDBAlert } from "mdbreact";
import axios from "axios";

import Navbar from "./navbar";
import "../styles/signup.css";

const useForceUpdate = () => useState()[1];

function Signup(props) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    password: "",
    email: "",
    confirmpassword: ""
  });

  const [errorData, setErrorData] = useState({ errorMessage: "true" });
  const updateUserData = event => {
    let name = event.target.name;
    setUserData({ ...userData, [name]: event.target.value });
  };
  const validatePassword = () => {
    if (userData.confirmpassword !== userData.password) {
      return false;
    }
    return true;
  };

  const forceUpdate = useForceUpdate();

  const handleClick = async event => {
    if (!validatePassword()) {
      event.preventDefault();
      forceUpdate();
      return;
    }
    event.preventDefault();
    try {
      const UserDetails = await axios.post(
        "http://localhost:5000/api/auth",
        userData
      );
      if (UserDetails.status === 200) {
        props.history.push(`/${UserDetails.data.id}/verify`);
      }
    } catch (error) {
      if (error.response.data) {
        setErrorData({ errorMessage: error.response.data.errors[0].message });
      } else setErrorData({ errorMessage: "Something went wrong!" });
    }
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="container" md="12">
        <div className="form">
          <form onSubmit={handleClick} style={{ marginTop: "80px" }}>
            <MDBJumbotron>
              <h2 className=" mb-4">Sign Up</h2>
              <p className="h5  mb-4 para">
                Please fill in the details to create an account!
              </p>
              <hr />
              <div className="grey-text">
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      onChange={updateUserData}
                      label="First name"
                      icon="user"
                      name="firstName"
                      group
                      type="text"
                      id="materialFormRegisterNameEx"
                      required
                    />
                  </MDBCol>
                  <MDBCol>
                    {" "}
                    <MDBInput
                      onChange={updateUserData}
                      name="lastName"
                      label="Last name"
                      icon="user"
                      group
                      type="text"
                      validate
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      onChange={updateUserData}
                      name="contact"
                      label="Contact No."
                      icon="address-book"
                      group
                      type="number"
                      validate
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      onChange={updateUserData}
                      name="email"
                      label="Enter Your Email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      required
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      onChange={updateUserData}
                      name="password"
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      required
                    />
                    <MDBInput
                      onChange={updateUserData}
                      name="confirmpassword"
                      label="Confirm password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      required
                    />
                    {validatePassword() === false ? (
                      <MDBContainer>
                        <MDBAlert color="warning">
                          Password does not match!
                        </MDBAlert>
                      </MDBContainer>
                    ) : (
                      ""
                    )}
                  </MDBCol>
                  {errorData.errorMessage === "true" ? (
                    ""
                  ) : (
                    <MDBContainer>
                      <MDBAlert color="danger" dismiss>
                        {errorData.errorMessage}
                      </MDBAlert>
                    </MDBContainer>
                  )}
                </MDBRow>
              </div>
              <div className="text-center">
                <MDBBtn
                  className="signupbtn"
                  type="submit"
                  style={{ borderRadius: "20px" }}
                >
                  Register
                </MDBBtn>
              </div>
            </MDBJumbotron>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Signup;
