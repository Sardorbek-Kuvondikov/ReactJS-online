import styled, { css } from "styled-components";

const flexCenter = css`
  align-items: center;
`;

export const Container = styled.div`
  /* max-width: 1280px; */
  /* width: 100%; */
  /* margin: 0 auto; */
  display: ${({ flex }) => flex && "flex"};
  ${flexCenter};
  /* padding: ${({ flex }) => !flex && "0 20px"}; */
`;
