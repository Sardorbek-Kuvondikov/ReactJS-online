import React, { Component } from "react";
import "./students.css";

class Students extends Component {
  render() {
    const { fruits } = this.props.data;

    return (
      <div className="inner">
        <h1>Fruits List</h1>
        <ul>
          {fruits.map((value) => (
            <li key={value.id}>
              <img src={value.img} alt={value.name} />
              <h2>{value.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Students;
