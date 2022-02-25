import React, { Component } from "react";


import { Spinner } from "react-bootstrap";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss";
 
import "./shared/CSS/blueTheme.css";


import UserLayout from "./shared/Layout/User-Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    let content = this.state.loading ? (
      <div className="Loader">
     <Spinner className="loader-main" animation="grow" variant="info" />
      </div>
    ) : (
      <Switch>
        <Route path="/" render={(props) => <UserLayout {...props} />} />
        <Redirect from="/" to="/" />
      </Switch>
    );

    return <div>{content}</div>;
  }
}

export default withRouter(App);
