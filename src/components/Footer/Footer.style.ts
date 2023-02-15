import styled from "styled-components";

export const Container = styled.div`
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
    bottom: -1px;
    max-width: 100%;
    border-radius: 0px;
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
