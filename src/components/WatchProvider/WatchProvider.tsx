"use client";

import { FC, useState } from "react";
import { IProps } from "./WatchProvider.types";
import * as S from "./WatchProvider.style";
import Image from "@/components/Image";

const WatchProvider: FC<IProps> = ({ name, logo }) => {
  const [tooltip, showTooltip] = useState(false);

  return (
    <S.Provider>
      <S.Tooltip show={tooltip}>{name}</S.Tooltip>
      <div
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => showTooltip(false)}
      >
        <Image
          alt={name}
          src={`https://image.tmdb.org/t/p/w45${logo}`}
          w="45px"
          h="45px"
        />
      </div>
    </S.Provider>
  );
};

export default WatchProvider;
