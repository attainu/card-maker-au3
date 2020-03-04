import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../navbar";
import JadeCard from "../cardsDesign/jade";
function JadeForm(props) {
  const [userData, setUserData] = useState({
    name: "Sahil",
    title: "Some thing",
    website: "",
    address: "",
    profileLink: "",
    coverLink: "",
    facebookLink: "",
    contact: 8587845717,
    email: "sahilsiddiqui78622@gmail.com"
  });
  const [isPublic, setIsPublic] = useState(false);
  const [isNavigate, setIsNavigate] = useState(false);
  const [isWhatsup, setIsWhatsup] = useState(false);

  const updateUserData = event => {
    let name = event.target.name;
    setUserData({ ...userData, [name]: event.target.value });
  };

  // useEffect(async () => {
  //   const CardData = await axios.post("http://localhost:5000/api/jade/create", {
  //     name: userData.name,
  //     title: userData.title,
  //     website: userData.website,
  //     address: userData.address,
  //     profileLink: userData.profileLink,
  //     coverLink: userData.coverLink,
  //     facebookLink: userData.facebookLink,
  //     contact: userData.contact,
  //     email: userData.email,
  //     isPublic: isPublic,
  //     isNavigate: isNavigate,
  //     isWhatsup: isWhatsup
  //   });
  //   console.log(CardData);
  // }, []);

  // console.log(userData, isPublic, isNavigate, isWhatsup);
  return (
    <React.Fragment>
      <NavBar />
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-8">
            <form>
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
              <div className="md-form form-group mt-5">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="isNavigate"
                    onClick={() => setIsNavigate(!isNavigate)}
                  />
                  <label className="custom-control-label" for="isNavigate">
                    Want to show Navigate
                  </label>
                </div>
              </div>
              <div className="md-form form-group mt-5">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="isWhatsup"
                    onClick={() => setIsWhatsup(!isWhatsup)}
                  />
                  <label className="custom-control-label" for="isWhatsup">
                    What's Up ?
                  </label>
                </div>
              </div>
              <div className="md-form form-group mt-5">
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
                  name="coverLink"
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
                  name="profileLink"
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
            </form>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <a href="http://localhost:3000/show/jade">Live Link</a>
              </div>
            </div>
            <br />
            <JadeCard
              name={userData.name}
              title={userData.title}
              contact={userData.contact}
              email={userData.email}
              website={userData.website}
              address={userData.address}
              cover={userData.coverLink}
              profile={userData.profileLink}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default JadeForm;
