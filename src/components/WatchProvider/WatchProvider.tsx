"use client";

import { FC, useState } from "react";
import { IProps } from "./WatchProvider.types";
import * as S from "./WatchProvider.style";

const WatchProvider: FC<IProps> = ({ name, logo }) => {
  const [tooltip, showTooltip] = useState(false);

  return (
    <S.Provider>
      <S.Tooltip show={tooltip}>{name}</S.Tooltip>
      <div
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => showTooltip(false)}
      >
        <img alt={name} src={`https://image.tmdb.org/t/p/w45${logo}`} />
      </div>
    </S.Provider>
  );
};

export default WatchProvider;
