import React from "react";
import "./App.css";
import Signup from "./Signup";
import Signin from "./Signin";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    const getRes = (value) => {
      this.setState({ active: value });
    };
    return (
      <>
        {this.state.active ? (
          <Signin getRes={getRes} />
        ) : (
          <Signup getRes={getRes} />
        )}
      </>
    );
  }
}
