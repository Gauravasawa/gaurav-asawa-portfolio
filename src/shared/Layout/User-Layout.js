import React from "react";
import Header from "../Header1/Header";
import SideMenu from "../Sidebar1/SideMenu";
import { menuItems } from "../Sidebar1/menuItems";
import Routers from "../../routers/routers";
import { BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import { useState } from "react";

function User_Layout() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header style={{ position: "fixed" }} />
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Switch>
            <div style={{ zIndex: "-1", marginTop: "50px" }}>
              <Routers />
            </div>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default withRouter(User_Layout);

