import React from "react";
import { Table, ProgressBar } from "react-bootstrap";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div>
      <div className="asy-BoxBorder">
        <div
          className="card"
          style={{ margin: 10, padding: 10, border: "1px solid tomato" }}
        >
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
          </div>
          <div className="intro-text" style={{ border: 0 }}>
            <h5
              style={{
                color: "black",
                letterSpacing: "2px",
                fontFamily: "sans-serif",
                fontWeight: 400,
              }}
            >
              I am FrontEnd Designer @Asychron Technolgies in Wakad, Pune.
              <br />
              <br />
              I have done Masters in Scentific Computing from Pune University.
              <br />
              <br />
              I'm Currently working in React (Js & Native ).
            </h5>
          </div>
        </div>
        <div
          className="card"
          style={{ margin: 10, padding: 10, border: "1px solid tomato" }}
        >
          <div className="table-table-about">
            <Table style={{fontWeight: 600}}>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Gaurav Ajay Asawa</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>24</td>
                </tr>
                <tr>
                  <td>Nationality</td>
                  <td>Indian</td>
                </tr>
                <tr>
                  <td>Languages</td>
                  <td>English, Hindi, Marathi</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>Loni Bk, 413736</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>India</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div
            className="button"
            style={{
              padding: "15px 15px 15px 15px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              className="resume-download button"
              style={{
                width: 150,
                height: 50,
                backgroundColor: "lightsalmon",
                border: "none",
              }}
              onClick={(e)=>{
                e.preventDefault();
                window.location.href = "https://drive.google.com/file/d/1eCRPsBRDDmk8kSC08aWE0oSZ2fVKbtmx/view?usp=sharing";
              }}
            >
              <span style={{ fontWeight: 500 }}> Download CV</span>
            </button>
          </div>
        </div>
        <div
          className="card"
          style={{ margin: 10, padding: 10, border: "1px solid tomato" }}
        >
          <div
            className="asy-main-page-heading"
            style={{
              fontWeight: "700",
            }}
          >
            <span style={{ color: "tomato" }}>
              <h4>My Skills</h4>
            </span>
          </div>
            <div className="progress-bar-group" style={{ marginTop: 15 }}>
              <div className="progress-bar-js">
                <div className="progress-bar-text">
                  <h5 style={{ fontSize: "18px" }}>JavaScript</h5>
                </div>
                <ProgressBar
                  animated
                  now={45}
                  now={60}
                  label={`${60}%`}
                  variant="warning"
                />
              </div>
              <div className="progress-bar-js" style={{ marginTop: "25px" }}>
                <div className="progress-bar-text">
                  <h5 style={{ fontSize: "18px" }}>React Js</h5>
                </div>
                <ProgressBar
                  animated
                  now={45}
                  now={70}
                  label={`${70}%`}
                  variant="warning"
                />
              </div>
              <div className="progress-bar-js" style={{ marginTop: "25px" }}>
                <div className="progress-bar-text">
                  <h5 style={{ fontSize: "18px" }}>React Native</h5>
                </div>
                <ProgressBar
                  animated
                  now={45}
                  now={70}
                  label={`${70}%`}
                  variant="warning"
                />
              </div>
              <div className="progress-bar-js" style={{ marginTop: "25px" }}>
                <div className="progress-bar-text">
                  <h5 style={{ fontSize: "18px" }}>Java</h5>
                </div>
                <ProgressBar
                  animated
                  now={45}
                  now={60}
                  label={`${60}%`}
                  variant="warning"
                />
              </div>
              <div className="progress-bar-js" style={{ marginTop: "25px" }}>
                <div className="progress-bar-text">
                  <h5 style={{ fontSize: "18px" }}>PHP</h5>
                </div>
                <ProgressBar
                  animated
                  now={45}
                  now={60}
                  label={`${60}%`}
                  variant="warning"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
