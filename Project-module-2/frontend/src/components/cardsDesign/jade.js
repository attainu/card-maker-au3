import React, { useState } from "react";
import { MDBCollapse } from "mdbreact";
import "../../styles/jade.css";
import { MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon
} from "mdbreact";

const JadeCard = props => {
  const [collapseId, setCollapseId] = useState("");

  const toggleCollapse = iD => () => {
    setCollapseId(collapseId != iD ? iD : "");
  };
  return (
    <React.Fragment>
      {console.log("Line27", props.isNavigate, props.isWhatsup)}
      <MDBCol>
        <MDBCard
          style={{ width: "19rem", backgroundColor: "#D9E7E2" }}
          className="manualcardclass"
        >
          {props.val.coverImage ? (
            <MDBCardImage
              className="img-thumbnail"
              src={props.val.coverImage}
              style={{ height: "200px", width: "300px" }}
            />
          ) : (
            ""
          )}
          {props.val.profileImage ? (
            <img
              style={{
                verticalAlign: "middle",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                position: "relative",
                left: "85px",
                top: "-68px",
                border: "1px solid white"
              }}
              src={props.val.profileImage}
              className="profile"
              alt="Image"
            />
          ) : (
            ""
          )}
          {props.val.name ? (
            <MDBCardTitle style={{ textAlign: "center", marginTop: "-65px" }}>
              {props.val.name}
            </MDBCardTitle>
          ) : (
            ""
          )}
          {props.val.title ? (
            <span
              style={{
                textAlign: "center",
                marginTop: "-10px",
                fontSize: "12px"
              }}
            >
              {props.val.title}
            </span>
          ) : (
            ""
          )}

          <MDBCardText md="12" style={{}}>
            {props.val.contact ? (
              <div className="odd field">
                <MDBIcon icon="phone-alt" style={{ paddingLeft: "10px" }} />{" "}
                &nbsp;&nbsp;<span>Mobile</span>
                &nbsp;&nbsp;
                <span>{props.val.contact}</span>
              </div>
            ) : (
              ""
            )}
            {props.val.email ? (
              <div className="even field">
                <MDBIcon icon="envelope" style={{ paddingLeft: "10px" }} />{" "}
                &nbsp;&nbsp;<span>Email</span>
                &nbsp;&nbsp;
                <span style={{ fontSize: "11px" }}>{props.val.email}</span>
              </div>
            ) : (
              ""
            )}
            {props.val.website ? (
              <div className="odd field">
                <MDBIcon icon="desktop" style={{ paddingLeft: "10px" }} />{" "}
                &nbsp;&nbsp;<span>Website</span>
                &nbsp;&nbsp;
                <span>{props.val.website}</span>
              </div>
            ) : (
              ""
            )}

            {props.val.address ? (
              <div className="even field">
                <MDBIcon
                  icon="map-marker-alt"
                  style={{ paddingLeft: "10px" }}
                />{" "}
                &nbsp;&nbsp;
                <span>Address</span>
                &nbsp;&nbsp;
                <span>{props.val.address}</span>
              </div>
            ) : (
              ""
            )}
            {props.isNavigate ? (
              <div className="odd field">
                <MDBIcon
                  icon="location-arrow"
                  style={{ paddingLeft: "10px" }}
                />{" "}
                &nbsp;&nbsp;
                <span>Navigate</span>
                &nbsp;&nbsp;
                <span></span>
              </div>
            ) : (
              ""
            )}
            {props.isWhatsup ? (
              <div className="even field">
                <MDBIcon fab icon="whatsapp" style={{ paddingLeft: "10px" }} />{" "}
                &nbsp;&nbsp;
                <span>Reach me on Whatsapp</span>
                &nbsp;&nbsp;
                <span></span>
              </div>
            ) : (
              ""
            )}

            {props.val.email ? (
              <div className="odd field">
                <MDBIcon icon="share-alt" style={{ paddingLeft: "10px" }} />{" "}
                &nbsp;&nbsp;
                <span>Share</span>
                &nbsp;&nbsp;
                <MDBBtn
                  className="togglejade"
                  onClick={toggleCollapse("basicCollapse")}
                  style={{ marginBottom: "1rem" }}
                >
                  <MDBIcon
                    className="downicon"
                    icon="angle-down"
                    style={{ paddingLeft: "10px" }}
                  />
                </MDBBtn>
                <MDBCollapse id="basicCollapse" isOpen={collapseId}>
                  {collapseId === "basicCollapse" ? (
                    <div className="collapsedown">
                      <span className="toggleicon">
                        <MDBIcon
                          fab
                          icon="whatsapp"
                          style={{ paddingLeft: "5px" }}
                        />
                        Whatsapp
                      </span>

                      <span className="toggleicon">
                        <MDBIcon
                          icon="envelope"
                          style={{ paddingLeft: "5px" }}
                        />
                        Email
                      </span>

                      <span className="toggleicon">
                        <MDBIcon
                          fab
                          icon="facebook"
                          style={{ paddingLeft: "5px" }}
                        />
                        Facebook
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </MDBCollapse>
              </div>
            ) : (
              ""
            )}
          </MDBCardText>

          <MDBFooter
            className="font-small pt-2 mt-1"
            className={collapseId === "basicCollapse" ? "formargin" : null}
          >
            <MDBRow>
              <MDBCol md="12">
                <ul
                  style={{
                    display: "inline",
                    paddingLeft: "29px",
                    height: 50 + "px !important"
                  }}
                >
                  {props.val.facebookLink ? (
                    <li
                      className="list-unstyled"
                      style={{ display: "inline", paddingLeft: "29px" }}
                    >
                      <a href={props.val.facebookLink} target="_blank">
                        <MDBIcon fab icon="facebook" />
                        &nbsp;&nbsp;
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {props.val.youtube ? (
                    <li
                      className="list-unstyled"
                      style={{ display: "inline", paddingLeft: "29px" }}
                    >
                      <a href={props.val.youtube} target="_blank">
                        <MDBIcon fab icon="youtube" />
                        &nbsp;&nbsp;
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {props.val.linkedin ? (
                    <li
                      className="list-unstyled"
                      style={{ display: "inline", paddingLeft: "29px" }}
                    >
                      <a href={props.val.linkedin} target="_blank">
                        <MDBIcon fab icon="linkedin" />
                        &nbsp;&nbsp;
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                  {props.val.instagram ? (
                    <li
                      className="list-unstyled"
                      style={{ display: "inline", paddingLeft: "29px" }}
                    >
                      <a href={props.val.instagram} target="_blank">
                        <MDBIcon fab icon="instagram" />
                        &nbsp;&nbsp;
                      </a>
                    </li>
                  ) : (
                    ""
                  )}
                </ul>
              </MDBCol>
            </MDBRow>
            <div style={{}} className="footer-copyright text-center py-3">
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
