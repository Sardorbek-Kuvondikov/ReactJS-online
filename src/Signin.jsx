import React, { Component } from "react";

export default class Signin extends Component {
  render() {
    return (
      <div className="card">
        <h2 className="signin">Sigin in</h2>
        <button onClick={() => this.props.getRes(false)} className="signin-btn">
          Sigin up
        </button>
      </div>
    );
  }
}
