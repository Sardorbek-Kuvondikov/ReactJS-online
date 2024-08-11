import React, { Component } from "react";
import { Container } from "./style";
import Header from "./header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Data } from "../utils/mock";

export default class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
    };
  }
  render() {
    let data = this.state.data;
    const onDelete = (id) => {
      let res = data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };
    const onFilter = (evt) => {
      let value = evt.target.value;
      let regEx = new RegExp(value, "gi");
      let res = Data.filter((item) => item.dasc.match(regEx));
      this.setState({ data: res });
    };
    return (
      <Container>
        <Header onFilter={onFilter} />
        <Container flex="true">
          <Sidebar />
          <Main onDelete={onDelete} data={data} />
        </Container>
      </Container>
    );
  }
}
