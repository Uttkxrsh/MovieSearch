import styled, { keyframes } from "styled-components";
import { IProps } from "./Loader.types";

const Animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div<IProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: ${Animation} 1s linear infinite;
`;
