import React, { useState } from "react";
import NavBar from "../navbar";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";
import Sidenav from "./sidebar";
import JadeCard from "../cardsDesign/jade";
function DashBoard() {
  const [sampleData, setSampleData] = useState({
    name: "Shubham",
    title: "Student",
    website: "attainu.com",
    address: "Electronic City, Phase-1, Bengaluru",
    isNavigate: null,
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBwRDpymbIBLU9lVMDgRD9w168ZXsc8RnY3_qnNEVNuCuBsAC5",
    coverImage:
      "data:image/jpeg;base64,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",
    facebookLink: "",
    youtube: "",
    linkedin: "",
    instagram: "",
    contact: 9355551123,
    email: "abc@gmail.com",
    isWhatsup: true
  });
  return (
    <div>
      <MDBRow>
        <NavBar />
        <MDBCol size="3">
          <Sidenav />
        </MDBCol>
        <MDBCol size="2">
          <div style={{ marginTop: "200px" }}>
            <Link to="/dashboard/new/jade">
              <JadeCard val={sampleData} />
            </Link>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default DashBoard;
