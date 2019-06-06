import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      err: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      pos => {
        this.setState({ lat: pos.coords.latitude });
      },
      err => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    } else if (this.state.errMessage) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    return <div>Loading . . . . </div>;
  }
}

export default App;
