"use client";

import Link from "next/link";
import styled from "styled-components";

export const WrapperLink = styled(Link)`
  border-bottom: 1px solid white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 518px;
  color: white;
  text-decoration: none;

  &:last-of-type {
    border-bottom: none;
  }

  > div {
    display: flex;
    align-items: center;
    column-gap: 24px;
  }

  img {
    display: block;
    width: 75px;
  }

  p {
    word-wrap: break-word;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 75px;
  width: 75px;
  max-width: 75px;
  min-height: 113px;
  height: 113px;
  max-height: 113px;
`;
