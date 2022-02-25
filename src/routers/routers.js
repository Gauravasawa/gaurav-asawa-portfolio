import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Headers from "../shared/Header1/Header";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";

class routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="#" />
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Headers} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
       
          {/* for nested routes
             <Route exact path="/home/family" component={Family} />
          */}
        </Switch>
      </div>
    );
  }
}

export default routers;
