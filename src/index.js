import React from "react";
import ReactDOM from "react-dom";
import DisplaySeason from "./DisplaySeason";

// Class componenta
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: "",
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    this.render();
  }

  getLoaction() {
    if (this.state.latitude && !this.state.errorMessage) {
      return <div>Latitude: {this.state.latitude}</div>;
    } else if (this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else {
      return <div>loading....</div>;
    }
  }
  render() {
    return (
      <DisplaySeason lat={this.state.lat} error={this.state.errorMessage} />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
