import React from "react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const Home = () => {
  return (
    <>
      <div className="col-sm-12 asy-main-jumbotron ">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card" style={{ padding: "20px" }}>
              <div
                className="asy-main-page-heading"
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                  fontFamily: "cursive",
                }}
              >
                <span style={{ color: "tomato" }}>
                  <Typewriter
                    string="Hi, I am Gaurav Asawa"
                    delay={120}
                    stopBlinkinOnComplete
                  />
                </span>

                <h4 style={{ marginTop: 30 }}>
                  I design and code beautifully simple things, and I love what I
                  do.
                </h4>
                <div
                  className="image hero hero-banner center"
                  style={{ marginTop: "50px" }}
                >
                  <div className="card" style={{ border: "none" }}>
                    <img src="https://mattfarley.ca/img/hero.svg" alt="gaurav_asawa-image" />
                  </div>
                  <div
                    className="intro-text"
                    style={{ backgroundColor: "#7510F7" }}
                  >
                    <h5
                      style={{
                        padding: "5rem 1.5rem",
                        color: "whitesmoke",
                        letterSpacing: "2px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      I am FrontEnd Designer @Asychron Technolgies in Wakad,
                      Pune.
                      <br />
                      <br />
                      I have done Masters in Scentific Computing from Pune
                      University.
                      <br />
                      <br />
                      I'm Currently working in React (Js & Native ).
                    </h5>
                  </div>
                </div>
                <hr className="hr-line" />
                <div
                  className="social-media-icons"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <div className="insta-icon" style={{ marginRight: 10 }}>
                    <a href="https://www.instagram.com/gauravasawa/">
                      <i
                        class="bi bi-instagram"
                        style={{ color: "tomato", cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                  <div className="facebook-icon" style={{ marginRight: 10 }}>
                    <a href="https://www.facebook.com/gaurav.asawa.3">
                      <i
                        class="bi bi-facebook"
                        style={{ color: "tomato", cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                  <div className="github-icon" style={{ marginRight: 10 }}>
                    <a href="https://github.com/Gauravasawa">
                      <i
                        class="bi bi-github"
                        style={{ color: "tomato", cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                  <div className="linkedin-icon">
                    <a href="https://www.linkedin.com/in/gaurav-asawa-84a93314a">
                      <i
                        class="bi bi-linkedin"
                        style={{ color: "tomato", cursor: "pointer" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
