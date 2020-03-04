import React, { useState } from "react";
import { MDBCollapse } from "mdbreact";
// import "../../styles/jade.css";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon
} from "mdbreact";

const JadeCard = props => {
  const [collapseId, setCollapseId] = useState("");
  const toggleCollapse = collapseID => () => {
    setCollapseId(collapseId !== collapseID ? collapseID : "");
  };
  return (
    <React.Fragment>
      <MDBCol>
        <MDBCard style={{ width: "17rem" }}>
          <MDBCardTitle style={{ paddingLeft: "45px" }}>
            {props.name}
          </MDBCardTitle>
          <span style={{ paddingLeft: "90px", marginTop: "-10px" }}>
            {props.title}
          </span>
          <MDBCardImage
            className="img-thumbnail"
            src={props.cover}
            style={{ height: "200px", width: "300px" }}
          />
          <MDBCardBody>
            <img
              style={{
                height: "150px",
                width: "200px",
                borderRadius: "50%",
                marginTop: "-100px",
                position: "relative",
                paddingLeft: "30px"
              }}
              src={props.profile}
            />
            <MDBCardText md="12">
              <p className="odd">
                <MDBIcon icon="phone-alt" /> &nbsp;&nbsp;<span>Mobile</span>
                &nbsp;&nbsp;
                <span>{props.contact}</span>
              </p>
              <p className="even">
                <MDBIcon icon="envelope" /> &nbsp;&nbsp;<span>Email</span>
                &nbsp;&nbsp;
                <span style={{ fontSize: "11px" }}>{props.email}</span>
              </p>
              <p className="odd">
                <MDBIcon icon="desktop" /> &nbsp;&nbsp;<span>Website</span>
                &nbsp;&nbsp;
                <span>{props.website}</span>
              </p>
              <p className="even">
                <MDBIcon icon="map-marker-alt" /> &nbsp;&nbsp;
                <span>Address</span>
                &nbsp;&nbsp;
                <span>{props.address}</span>
              </p>
              <p className="odd">
                <MDBIcon icon="location-arrow" /> &nbsp;&nbsp;
                <span>Navigate</span>
                &nbsp;&nbsp;
                <span></span>
              </p>
              <p className="even">
                <MDBIcon fab icon="whatsapp" /> &nbsp;&nbsp;
                <span>Reach me on Whatsapp</span>
                &nbsp;&nbsp;
                <span></span>
              </p>
              <div>
                <MDBIcon icon="share-alt" /> &nbsp;&nbsp;
                <span>Share</span>
                &nbsp;&nbsp;
                <MDBBtn
                  className="togglejade"
                  onClick={toggleCollapse("basicCollapse")}
                  style={{ marginBottom: "1rem", backgroundColor: "#2e2e2e" }}
                >
                  <MDBIcon icon="angle-down" />
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={collapseId}>
                  <div>
                    <span>
                      <MDBIcon fab icon="whatsapp" />
                      Whatsapp
                    </span>
                    &nbsp;
                    <span>
                      <MDBIcon far icon="comment-dots" />
                      SMS
                    </span>
                    &nbsp;
                    <span>
                      <MDBIcon icon="envelope" />
                      Email
                    </span>
                    &nbsp;
                    <span>
                      <MDBIcon fab icon="facebook" />
                      Facebook
                    </span>
                  </div>
                </MDBCollapse>
              </div>
            </MDBCardText>
          </MDBCardBody>
          <MDBFooter className="footermanual font-small pt-2 mt-1">
            <MDBRow>
              <MDBCol md="12">
                <h5 className="title">Links</h5>
                <ul style={{ display: "inline" }}>
                  <li className="list-unstyled" style={{ display: "inline" }}>
                    <a href={props.facebookLink}>
                      <MDBIcon fab icon="facebook" />
                      &nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="list-unstyled" style={{ display: "inline" }}>
                    <a href={props.youtubeLink}>
                      <MDBIcon fab icon="youtube" />
                      &nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="list-unstyled" style={{ display: "inline" }}>
                    <a href={props.linkedinLink}>
                      <MDBIcon fab icon="linkedin" />
                      &nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="list-unstyled" style={{ display: "inline" }}>
                    <a href={props.instagramLink}>
                      <MDBIcon fab icon="instagram" />
                      &nbsp;&nbsp;
                    </a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.dibiz.com"> Dibiz.com </a>
              </MDBContainer>
            </div>
          </MDBFooter>
        </MDBCard>
      </MDBCol>
    </React.Fragment>
  );
};
export default JadeCard;
