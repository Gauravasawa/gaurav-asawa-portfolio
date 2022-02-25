import React, { Component } from "react";
import "./Header.css";
import gauravLogo from '../../assets/image/GA.png';


export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Topbar Search --> */}
        <div className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100">
          <div className="input-group">
            <div className="input-group-append">
              <div className="card" style={{border: 0}}>
              <img
                src={gauravLogo}
                className="responsive-img avatar"
                alt="gaurav_image_logo"
              />
            </div>
            </div>
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <div>
              <div className="navbar navbar-expand form-inline mr-auto mb-4 w-100">
                <div className="input-group">
                  <div className="input-group-append">
                    <img
                      src={gauravLogo}
                      className="responsive"
                      alt="gaurav_image_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}
