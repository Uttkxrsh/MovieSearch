import styled, { css, keyframes } from "styled-components";
import { ILoadingProps, IWrapperProps } from "./Image.types";

const SkeletonAnimation = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const Wrapper = styled.div<IWrapperProps>`
  width: ${({ w }) => (!!w ? w : "initial")};
  height: ${({ h }) => (!!h ? h : "initial")};
  position: relative;
`;

export const Image = styled.img<ILoadingProps>`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      opacity: 1;
    `}
`;

export const Placeholder = styled.div<ILoadingProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${({ isLoaded }) =>
    isLoaded &&
    css`
      display: none;
    `}
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;
  background: rgba(255, 255, 255, 0.5);
  overflow: hidden;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(192, 192, 192, 0) 0,
      rgba(192, 192, 192, 0.2) 20%,
      rgba(192, 192, 192, 0.5) 60%,
      rgba(192, 192, 192, 0)
    );
    animation: ${SkeletonAnimation} 2s infinite;
    content: "";
  }
`;
