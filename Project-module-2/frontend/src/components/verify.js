import React, { useState } from "react";
import axios from "axios";
import { MDBIcon, MDBInput, MDBRow, MDBCol, MDBBtn, MDBModal } from "mdbreact";

import Navbar from "./navbar";
import "../styles/verify.css";

function VerifyOtp(props) {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [modal, setModal] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const verifyOtp = await axios.post(
        `http://localhost:5000/api/auth/${props.match.params.id}/verify`,
        { otp }
      );
      if (verifyOtp.status === 200) {
        setModal(true);
      }
    } catch (error) {
      setErrorMessage("OTP is incorrect!");
    }
  };

  const okHandler = e => {
    props.history.push(`/signin`);
  };
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="container xyz">
        <form>
          <MDBRow className="manual">
            <MDBCol>
              <MDBInput
                label="Enter Your OTP"
                required
                onChange={e => setOtp(e.target.value)}
              />
              {errorMessage === "OTP is incorrect!" ? (
                <div>
                  <h6 className="red-text text-darken-2">{errorMessage}</h6>
                </div>
              ) : (
                ""
              )}
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <MDBBtn
                color="#EF8275"
                className="manual2"
                onClick={handleSubmit}
                type="submit"
              >
                Submit &nbsp;&nbsp;
                <MDBIcon icon="location-arrow" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
        <MDBModal isOpen={modal} className="modal-notify success">
          <div className="modal-header">
            <p className="heading lead">Voila!</p>
          </div>
          {/* <!--Body--> */}
          <div className="modal-body">
            <div className="text-center">
              <i className="fas fa-check fa-4x mb-3 animated rotateIn"></i>
              <p>Success: Your account is verified!</p>
            </div>
          </div>
          {/* <!--Footer--> */}
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-success verifybtn"
              onClick={okHandler}
            >
              Go To Login
            </button>
          </div>
        </MDBModal>
      </div>
    </React.Fragment>
  );
}

export default VerifyOtp;
