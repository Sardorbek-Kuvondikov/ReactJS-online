import React, { Component } from "react";

export default class Signup extends Component {
  render() {
    return (
      <div className="box">
        <h2 className="sigup">Sigin up</h2>
        <button onClick={() => this.props.getRes(true)} className="signup-btn">
          Sigin in
        </button>
      </div>
    );
  }
}
