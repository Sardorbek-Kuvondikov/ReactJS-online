import styled, { css } from "styled-components";

import { ReactComponent as burger } from "../../assets/icons/hambarger.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as audio } from "../../assets/icons/mikrafon.svg";
import { ReactComponent as video } from "../../assets/icons/video.svg";
import { ReactComponent as menu } from "../../assets/icons/menu.svg";
import { ReactComponent as call } from "../../assets/icons/call.svg";

const flexBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const iconsWidHe = css`
  width: 22px;
  height: 22px;
`;

const mainColor = css`
  background-color: #181818;
  color: #d9d9d9;
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 24px;
  height: 24px;
`;

Icons.Logo = styled.img`
  width: 89px;
  height: 20px;
`;

Icons.Search = styled(search)`
  width: 70px;
  height: 36px;
  padding: 8px;
  background-color: #323232;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
`;

Icons.Audio = styled(audio)`
  margin-left: 20px;
  display: block;
`;

Icons.Video = styled(video)`
  ${iconsWidHe}
`;

Icons.Menu = styled(menu)`
  width: 18px;
  height: 18px;
`;

Icons.Call = styled(call)`
  ${iconsWidHe}
`;

Icons.Profil = styled.img`
  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  border: 1px solid black;
  color: #d9d9d9;
  background-color: #181818;
  border-bottom: 1.5px solid #474747;
`;

export const Box = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  ${flexBox}
`;

export const Category = styled.div`
  ${flexBox}
  width: ${({ icon }) => icon && "164px"};
  gap: ${({ logo }) => logo && "18px"};
`;

export const Input = styled.input`
  width: 478px;
  height: 36px;
  padding-left: 16px;
  ${mainColor};
  border: 1px solid #474747;
  outline: none;
  font-size: 16px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;
