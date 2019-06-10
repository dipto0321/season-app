import React, { Component } from "react";
import SeasonDisplay from "../components/SeasonDisplay";
import Spinner from "../components/Spinner";

export class App extends Component {
  state = {
    lat: null,
    err: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    return <Spinner messages={"Please accept the location request"} />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
