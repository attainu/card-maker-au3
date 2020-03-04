import React from "react";

import Navbar from "./navbar";
import "../styles/homepage.css";

const Homepage = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}

      {/* <!-- Full Page Intro --> */}
      {/* <!--Main layout--> */}
      <main>
        <Navbar />
        <div className="container">
          {/* <!--Section: Main info--> */}
          <section className="mt-5 wow fadeIn">
            {/* <!--Grid row--> */}
            <div className="row" style={{ marginTop: "100px" }}>
              {/* <!--Grid column--> */}
              <div className="col-md-6 mb-4">
                <img
                  src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                  className="img-fluid z-depth-1-half"
                  alt="headImage"
                  height="100px"
                />
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div
                className="col-md-6 mb-4"
                style={{
                  border: "2px solid grey",
                  backgroundColor: "lightgrey"
                }}
              >
                {/* <!-- Main heading --> */}
                <h3 className="h3 mb-3">
                  &nbsp; Inspire your clients. Digitally.
                </h3>
                <hr />
                <p>
                  (<strong>Dibiz</strong> ) is a Digital Business Card that is
                  smart, elegant and affordable.
                </p>
                <ul style={{ listStyle: "none" }}>
                  <li style={{ verticalAlign: "middle" }}>
                    <span>
                      <i className="material-icons orange600">
                        edit &nbsp;&nbsp;
                      </i>
                    </span>
                    <span style={{ paddingBottom: "860px" }}>
                      Easy. Create within minutes
                    </span>
                  </li>
                  <li>
                    <i className="material-icons orange600">
                      picture_in_picture &nbsp;&nbsp;
                    </i>
                    <span style={{ paddingTop: "30px" }}>
                      Impressive Rich Content
                    </span>
                  </li>
                  <li>
                    <i className="material-icons orange600">
                      share &nbsp;&nbsp;
                    </i>
                    Share from anywhere and anytime
                  </li>
                  <li>
                    <i className="material-icons orange600">
                      public &nbsp;&nbsp;
                    </i>
                    Save trees and contribute to the environment
                  </li>
                </ul>

                <p>Read details below to learn more about Dibiz.</p>
                {/* <!-- Main heading --> */}

                <hr />

                <p>
                  <strong>4+</strong> different card designs,
                  <strong>Multiple</strong> cards making,
                  <strong>Free for personal and commercial use.</strong>
                </p>
                <button
                  style={{ borderRadius: "20px", verticalAlign: "middle" }}
                  target="_blank"
                  href="https://mdbootstrap.com/getting-started/"
                  className="btn btn-grey btn-md"
                >
                  <i
                    className="material-icons orange600"
                    style={{ verticalAlign: "middle", paddingBottom: "7px" }}
                  >
                    add
                  </i>
                  <span
                    style={{ fontSize: "17px", textTransform: "capitalize" }}
                  >
                    Create your own
                  </span>
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!--Section: Main info--> */}

          <hr className="my-5" />

          {/* <!--Section: Main features & Quick Start--> */}
          <section>
            <h3 className="h3 text-center mb-5">About Dibiz</h3>

            {/* <!--Grid row--> */}
            <div className="row wow fadeIn">
              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12 px-4">
                {/* <!--First row--> */}
                <div className="row">
                  <div className="col-1 mr-3"></div>
                  <div className="col-10">
                    <h5 className="feature-title">Dibiz</h5>
                    <p className="grey-text">
                      Thanks to Dibiz you can make multiple cards with different
                      designs available.
                    </p>
                  </div>
                </div>
                {/* <!--/First row--> */}

                <div style={{ height: "30px" }}></div>

                {/* <!--Second row--> */}
                <div className="row">
                  <div className="col-1 mr-3"></div>
                  <div className="col-10">
                    <h5 className="feature-title">Feature-prone</h5>
                    <p className="grey-text">
                      Dibiz is full of different kind of features which is
                      provided to it's users.
                    </p>
                  </div>
                </div>
                {/* <!--/Second row--> */}

                <div style={{ height: "30px" }}></div>

                {/* <!--Third row--> */}
                <div className="row">
                  <div className="col-1 mr-3"></div>
                  <div className="col-10">
                    <h5 className="feature-title">Expand your reach</h5>
                    <p className="grey-text">
                      User can share the card-link with anyone which will
                      consist of all the information user has fed in and it will
                      help the user grow it's contacts.
                    </p>
                  </div>
                </div>
                {/* <!--/Third row--> */}
              </div>
              {/* <!--/Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-6 col-md-12">
                <p className="h5 text-center mb-4">
                  Watch our "5 min Quick Start" tutorial
                </p>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/ITzAIWhdn_I"
                    title="myFrame"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              {/* <!--/Grid column--> */}
            </div>
            {/* <!--/Grid row--> */}
          </section>
          {/* <!--Section: Main features & Quick Start--> */}

          <hr className="my-5" />

          {/* <!--Section: Not enough--> */}
          <section>
            <h2 className="my-5 h3 text-center">Not enough?</h2>

            {/* <!--First row--> */}
            <div className="row features-small mb-5 mt-3 wow fadeIn">
              {/* <!--First column--> */}
              <div className="col-md-4">
                {/* <!--First row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">
                      Free for personal and commercial use
                    </h6>
                    <p className="grey-text">
                      Our license is user-friendly. Feel free to use Dibiz for
                      both private as well as commercial projects.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/First row--> */}

                {/* <!--Second row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">4+ available designs</h6>
                    <p className="grey-text">
                      You can make your card in 4 different available designs.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Second row--> */}

                {/* <!--Third row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Multiple cards</h6>
                    <p className="grey-text">
                      Single user can make multiple cards using same email id.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Third row--> */}

                {/* <!--Fourth row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Share the link</h6>
                    <p className="grey-text">
                      After creating the card, user can share the link of the
                      card with anyone and grow his/her contacts.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/Fourth row--> */}
              </div>
              {/* <!--/First column--> */}

              {/* <!--Second column--> */}
              <div className="col-md-4 flex-center">
                <img
                  src="https://mdbootstrap.com/img/Others/screens.png"
                  alt="MDB Magazine Template displayed on iPhone"
                  className="z-depth-0 img-fluid"
                />
              </div>
              {/* <!--/Second column--> */}

              {/* <!--Third column--> */}
              <div className="col-md-4 mt-2">
                {/* <!--First row--> */}
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Future improvements</h6>
                    <p className="grey-text">
                      More designs can be added and whatsapp, facebook APIs can
                      be used to share the link with anyone in the contact list.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
                {/* <!--/First row--> */}

                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-check-circle fa-2x indigo-text"></i>
                  </div>
                  <div className="col-10">
                    <h6 className="feature-title">Easy to use and customize</h6>
                    <p className="grey-text">
                      Using Dibiz is straightforward and pleasant. Cards making
                      flexibility allows you deep customization.
                    </p>
                    <div style={{ height: "15px" }}></div>
                  </div>
                </div>
              </div>
              {/* <!--/Third column--> */}
            </div>
            {/* <!--/First row--> */}
          </section>
          {/* <!--Section: Not enough--> */}

          <hr className="mb-5" />

          {/* <!--Section: More--> */}

          {/* <!--Section: More--> */}
        </div>
      </main>
      {/* <!--Main layout--> */}
      {/* <!--Footer--> */}
      <footer className="page-footer text-center font-small mt-4 wow fadeIn">
        <section>
          <h2 className="my-5 h3 text-center">Contact us</h2>
          <div className="card" style={{ backgroundColor: "transparent" }}>
            {/* <!--Card content--> */}
            <div
              className="card-body px-lg-5 pt-0"
              style={{ backgroundColor: "transparent" }}
            >
              {/* <!-- Form --> */}
              <form
                className="text-center"
                style={{ color: "#757575" }}
                action="#!"
              >
                <div className="form-row">
                  <div className="col">
                    {/* <!-- First name --> */}
                    <div className="md-form">
                      <input
                        type="text"
                        id="materialRegisterFormFirstName"
                        className="form-control"
                      />
                      <label htmlFor="materialRegisterFormFirstName">
                        Name
                      </label>
                    </div>
                  </div>
                </div>

                {/* <!-- E-mail --> */}
                <div className="md-form mt-2">
                  <input
                    type="email"
                    id="materialRegisterFormEmail"
                    className="form-control"
                  />
                  <label htmlFor="materialRegisterFormEmail">E-mail</label>
                </div>

                {/* <!-- Phone number --> */}
                <div className="md-form">
                  <input
                    type="password"
                    id="materialRegisterFormPhone"
                    className="form-control"
                    aria-describedby="materialRegisterFormPhoneHelpBlock"
                  />
                  <label htmlFor="materialRegisterFormPhone">
                    Phone number
                  </label>
                </div>
                <div className="form-row">
                  <div className="col">
                    <div className="md-form">
                      <input
                        type="text"
                        id="message"
                        className="form-control"
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Sign up button --> */}
                <button
                  className="btn btn-outline-info waves-effect"
                  type="submit"
                >
                  Send
                </button>

                <hr />
              </form>
              {/* <!-- Form --> */}
            </div>
          </div>
        </section>
        {/* <!--Call to action--> */}
        <div className="pt-4"></div>
        {/* <!--/.Call to action--> */}

        <hr className="my-4" />

        {/* <!-- Social icons --> */}
        <div className="pb-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f mr-3"></i>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter mr-3"></i>
          </a>

          <a
            href="https://www.youtube.com/watch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube mr-3"></i>
          </a>

          <a
            href="https://plus.google.com/u/0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google-plus-g mr-3"></i>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github mr-3"></i>
          </a>
        </div>
        {/* <!-- Social icons --> */}

        {/* <!--Copyright--> */}
        <div className="footer-copyright py-3">
          © 2019 Copyright:
          <a
            href="https://dibiz.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Dibiz.com{" "}
          </a>
        </div>
        {/* <!--/.Copyright--> */}
      </footer>
    </div>
  );
};

export default Homepage;
