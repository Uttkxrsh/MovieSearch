"use client";

import styled from "styled-components";

export const Container = styled.div``;
export const CountrySelector = styled.div`
  margin: 18px 0;
  display: inline-flex;
  flex-direction: column;
  max-width: 100%;
  label {
    margin-bottom: 8px;
  }

  select {
    border: none;
    padding: 8px 8px;
    border-radius: 5px;
    font-size: 16px;
    font-family: "Fira Mono", monospace;
  }

  small {
    margin-top: 4px;
    a {
      color: white;
    }
  }
`;

export const Platforms = styled.div``;

export const WatchOption = styled.div`
  p {
    margin-bottom: 8px;
  }
`;

export const PlatformList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 16px;
  margin-bottom: 16px;
`;
