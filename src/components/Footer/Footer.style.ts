import styled, { css } from "styled-components";
import { IProps } from "./Footer.types";

export const Container = styled.div<IProps>`
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  padding: 12px;
  text-align: center;
  border-radius: 8px;
  width: 80%;
  max-width: 650px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    border-radius: 0px;
    padding: 24px;
    bottom: -1px;

    ${({ mobileFixed }) =>
      mobileFixed &&
      css`
        position: static;
        transform: translateX(0);
      `}
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;

  span {
    margin: 0 8px;
  }

  a {
    color: white;
  }

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const Small = styled.small`
  a {
    color: white;
  }

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;
