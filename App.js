import React, { Component } from "react";
import Home from "./screens/home";
import Navigator from "./routes/homeStack";

class App extends Component {
  render() {
    return <Navigator />;
  }
}

export default App;
