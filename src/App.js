import React, { Component } from "react";
import Header from "./Header";
import SideNav from "./sidenav";
import Main from "./main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <SideNav />
          <Main />
        </div>
      </div>
    );
  }
}
export default App;
