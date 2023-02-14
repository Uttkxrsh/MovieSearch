import styled, { css } from "styled-components";
import { ITooltipProps } from "./WatchProvider.types";

export const Provider = styled.div`
  display: inline-block;
  position: relative;
`;

export const Tooltip = styled.div<ITooltipProps>`
  position: absolute;
  width: max-content;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  opacity: 0;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  // border: 1px solid white;
  transition: opacity 0.15s ease-in-out;

  ${({ show }) =>
    show &&
    css`
      opacity: 0.9;
    `}
`;
