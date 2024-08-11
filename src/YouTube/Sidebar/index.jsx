import React, { Component } from "react";
import { Box, Container, Titles, Wrapper } from "./style";
import { sidebar } from "../../utils/sidebar";

export default class Youtube extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ id, title, data }) => (
          <Wrapper key={id}>
            {title && <Titles title="true">{title}</Titles>}
            {data.map(({ icon: Icon, title }, index) => {
              return (
                <Box key={index}>
                  <Icon />
                  <Titles>{title}</Titles>
                </Box>
              );
            })}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
