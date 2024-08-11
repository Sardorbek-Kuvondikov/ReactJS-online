import React, { Component } from "react";
import { Container, Wrapper, Category, Icons, Input, Box } from "./style";
import logo from "../../assets/img/Youtube logo.png";
import profil from "../../assets/icons/profil.png";

class Youtube extends Component {
  render() {
    const { onFilter } = this.props;

    return (
      <Container>
        <Box>
          <Icons.Burger />
          <Icons.Logo src={logo} alt="logo img" />
        </Box>
        <Wrapper>
          <Category logo="true"></Category>
          <Category>
            <Input onChange={onFilter} type="text" placeholder="Search" />
            <Icons.Search />
            <Icons.Audio />
          </Category>
          <Category icon="true">
            <Icons.Video />
            <Icons.Menu />
            <Icons.Call />
            <Icons.Profil src={profil} />
          </Category>
        </Wrapper>
      </Container>
    );
  }
}
export default Youtube;
