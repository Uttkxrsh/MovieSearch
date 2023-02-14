"use client";

import { FC, useState } from "react";
import { IProps } from "./Image.types";
import * as S from "./Image.style";

const Image: FC<IProps> = ({ src, alt, w, h }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <S.Wrapper w={w} h={h}>
      <S.Placeholder isLoaded={isLoaded}>
        <S.Skeleton />
      </S.Placeholder>
      <S.Image
        isLoaded={isLoaded}
        src={src}
        alt={alt}
        key={`image-${src}`}
        onLoad={handleLoad}
      />
    </S.Wrapper>
  );
};

export default Image;
