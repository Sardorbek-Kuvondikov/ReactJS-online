import React, { Component } from "react";
import Mix from "./Mix";

export default class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div style={{ flex: 1 }}>
        <h1>Class</h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <Mix count={this.state.count} />
      </div>
    );
  }
}
