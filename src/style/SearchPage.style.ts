import styled from "styled-components";

export const Container = styled.div`
  padding: 48px 48px 140px 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    padding-bottom: 0px;
  }

  h1 {
    margin-bottom: 24px;
    max-width: 520px;
    word-wrap: break-word;
  }
`;
export const Back = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: white;
`;
export const Results = styled.div``;
