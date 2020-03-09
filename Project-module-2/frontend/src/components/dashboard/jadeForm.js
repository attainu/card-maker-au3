import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import NavBar from "../navbar";
import JadeCard from "../cardsDesign/jade";
import Sidenav from "./sidebar";

import { MDBJumbotron, MDBRow, MDBCol } from "mdbreact";
import userContext from "../../context/userContext";

function JadeForm() {
  const AuthorData = useContext(userContext);
  console.log(AuthorData);
  const [userData, setUserData] = useState({
    name: AuthorData.userData[0].firstName,
    title: "Default Title",
    website: null,
    address: null,
    profileImage:
      "data:image/png;base64,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",

    coverImage:
      "data:image/jpeg;base64,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",
    facebookLink: null,
    youtube: null,
    linkedin: null,
    instagram: null,
    contact: AuthorData.userData[0].contact,
    email: AuthorData.userData[0].email
  });
  const [isPublic, setIsPublic] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);
  const [isWhatsup, setIsWhatsup] = useState(false);
  const [userId, setUserid] = useState(AuthorData.userData[0].id);
  const [LiveId, setLiveId] = useState(null);

  const handleNavigate = event => {
    setIsNavigate(!isNavigate);
    //setUserData({ ...userData, [event.target.name]: isNavigate });
  };

  const handleWhatsapp = event => {
    setIsWhatsup(!isWhatsup);
    //setUserData({ ...userData, [event.target.name]: isWhatsup });
  };

  const updateUserData = event => {
    let name = event.target.name;
    setUserData({ ...userData, [name]: event.target.value });
  };

  const fetch = async () => {
    try {
      let data = {
        name: userData.name,
        title: userData.title,
        website: userData.website,
        address: userData.address,
        profileImage: userData.profileImage,
        coverImage: userData.coverImage,
        facebookLink: userData.facebookLink,
        youtube: userData.youtube,
        linkedin: userData.linkedin,
        instagram: userData.instagram,
        contact: userData.contact,
        email: userData.email,
        isPublic: isPublic,
        isNavigate: isNavigate,
        isWhatsup: isWhatsup,
        userId: userId
      };
      let token = localStorage.getItem("Token");
      if (token) {
        let fetchedData = await axios.post(
          "http://localhost:5000/api/jade/create",
          data,
          { headers: { "x-auth-token": token } }
        );
        setLiveId(fetchedData.data.id);
      }
    } catch (error) {
      return <h1>{error}</h1>;
    }
  };

  const onSaveChanges = async () => {
    try {
      let data = {
        name: userData.name,
        title: userData.title,
        website: userData.website,
        address: userData.address,
        profileImage: userData.profileImage,
        coverImage: userData.coverImage,
        facebookLink: userData.facebookLink,
        youtube: userData.youtube,
        linkedin: userData.linkedin,
        instagram: userData.instagram,
        contact: userData.contact,
        email: userData.email,
        isPublic: isPublic,
        isNavigate: isNavigate,
        isWhatsup: isWhatsup,
        userId: userId
      };
      console.log("Line 107", userData);
      const UpdatedData = await axios.post(
        `http://localhost:5000/api/jade/${LiveId}/edit`,
        data
      );
    } catch (error) {
      return <h1>{error}</h1>;
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <MDBRow>
        <MDBCol size="3">
          <Sidenav />
        </MDBCol>

        <MDBCol size="5">
          <div style={{ marginTop: "100px" }}>
            <MDBJumbotron>
              <form>
                <h4>Fill the details to create your card</h4>
                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    onChange={updateUserData}
                    value={userData.name}
                  />
                  <label for="name"></label>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Title / Job Description"
                    onChange={updateUserData}
                    value={userData.title}
                  />
                  <label for="title"></label>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="number"
                    className="form-control"
                    id="contact"
                    name="contact"
                    placeholder="Contact"
                    onChange={updateUserData}
                    value={userData.contact}
                  />
                  <label for="contact"></label>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="title"
                    placeholder="Email"
                    onChange={updateUserData}
                    value={userData.email}
                  />
                  <label for="email"></label>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="website"
                    name="website"
                    placeholder="Website"
                    onChange={updateUserData}
                  />
                  <label for="website"></label>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="Address"
                    name="address"
                    placeholder="Address"
                    onChange={updateUserData}
                  />
                  <label for="Address"></label>
                </div>
                <div
                  className="md-form form-group mt-5"
                  style={{ marginLeft: "30px" }}
                >
                  <div className="custom-control custom-switch">
                    <input
                      name="isNavigate"
                      type="checkbox"
                      className="custom-control-input"
                      id="isNavigate"
                      onClick={handleNavigate}
                    />
                    <label className="custom-control-label" for="isNavigate">
                      Want to show Navigate
                    </label>
                  </div>
                </div>
                <div
                  className="md-form form-group mt-5"
                  style={{ marginLeft: "30px" }}
                >
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="isWhatsup"
                      onClick={handleWhatsapp}
                    />
                    <label className="custom-control-label" for="isWhatsup">
                      Enable WhatsApp
                    </label>
                  </div>
                </div>
                <div
                  className="md-form form-group mt-5"
                  style={{ marginLeft: "30px" }}
                >
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="isPublic"
                      onClick={() => setIsPublic(!isPublic)}
                    />
                    <label className="custom-control-label" for="isPublic">
                      Want to Show in Public ?
                    </label>
                  </div>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="CoverPhoto"
                    name="coverImage"
                    placeholder="Cover Photo Link"
                    onChange={updateUserData}
                  />
                  <label for="CoverPhoto"></label>
                </div>
                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="ProfilePhoto"
                    name="profileImage"
                    placeholder="Profile Photo Link"
                    onChange={updateUserData}
                  />
                  <label for="ProfilePhoto"></label>
                </div>

                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="facebook"
                    name="facebookLink"
                    onChange={updateUserData}
                    placeholder="Enter Your Facebook link"
                  />
                  <label for="facebook"></label>
                </div>

                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="youtube"
                    name="youtube"
                    onChange={updateUserData}
                    placeholder="Enter Your Youtube link"
                  />
                  <label for="youtube"></label>
                </div>

                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="linkedin"
                    name="linkedin"
                    onChange={updateUserData}
                    placeholder="Enter Your Linkedin link"
                  />
                  <label for="facebook"></label>
                </div>

                <div className="md-form form-group mt-5">
                  <input
                    type="text"
                    className="form-control"
                    id="instagram"
                    name="instagram"
                    onChange={updateUserData}
                    placeholder="Enter Your Instagram link"
                  />
                  <label for="instagram"></label>
                </div>
              </form>
              <button
                type="button"
                className="btn btn-default"
                onClick={onSaveChanges}
              >
                Save Changes
              </button>
            </MDBJumbotron>
          </div>
        </MDBCol>
        <MDBCol size="4">
          <div>
            <div
              className="card"
              style={{ marginTop: "100px", width: "71%", marginLeft: "63px" }}
            >
              <div className="card-body">
                {LiveId ? (
                  <Link to={`/card/${LiveId}`} target="_blank">
                    Live Link
                  </Link>
                ) : null}
              </div>
            </div>
            <div style={{ marginTop: "150px" }}>
              <JadeCard
                val={userData}
                isWhatsup={isWhatsup}
                isNavigate={isNavigate}
              />
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default JadeForm;
