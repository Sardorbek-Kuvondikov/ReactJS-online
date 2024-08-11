import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const textBox = css`
  font-size: 11px;
  font-weight: 500;
`;
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: #181818;
`;
export const Wrapper = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: #999 transparent;

  color: white;
  padding: 22px;
`;

export const Cardinner = styled.ul`
  ${flexBox}
  gap: 14px;
  flex-wrap: wrap;
`;
export const Items = styled.li`
  max-width: 242px;
  width: 100%;
  list-style: none;
`;
export const MainImg = styled.img`
  width: 100%;
  height: 136px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;
export const Channel = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
export const Inner = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
`;
export const Box = styled.div``;
export const Desc = styled.h3`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;
export const Title = styled.p`
  ${textBox}

  color: #aaaaaa;
  margin-top: 5px;
  line-height: 15px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #aaaaaa;
`;
export const Views = styled.p`
  ${textBox}
`;
export const Day = styled.p`
  ${textBox}
`;

export const Deletebtn = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
