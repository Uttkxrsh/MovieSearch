import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  vertical-align: middle;
  margin: 48px 48px 90px 48px;

  h1 {
    font-size: 48px;
    text-align: center;
  }
`;

export const FormContainer = styled.div``;

export const InputContainer = styled.div`
  position: relative;
  margin-top: 24px;

  input {
    border: none;
    background: none;
    border-bottom: 2px solid white;
    font-size: 24px;
    width: 100%;
    color: white;
    padding: 8px 72px 8px 16px;
    font-family: "Fira mono", monospace;
  }

  > div {
    display: flex;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    column-gap: 8px;
  }

  svg {
    cursor: pointer;
  }
`;

export const SearchResults = styled.div`
  margin-top: 24px;
`;

export const MoreContainer = styled.div`
  padding-top: 8px;
  border-top: 1px solid white;

  a {
    color: white;
  }
`;
