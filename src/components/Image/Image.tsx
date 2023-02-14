import { FC, useState } from "react";
import { IProps } from "./Image.types";
import * as S from "./Image.style";

const Image: FC<IProps> = ({ src, alt, w, h }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    console.log("is loaded");
    setIsLoaded(true);
  };

  return (
    <S.Wrapper w={w} h={h}>
      <h1>{isLoaded ? "is loaded" : "is not loaded"}</h1>
      <S.Placeholder isLoaded={isLoaded}>
        <S.Skeleton />
      </S.Placeholder>
      <S.Image
        isLoaded={isLoaded}
        src={src}
        alt={alt}
        key={`image-${src}`}
        onLoad={handleLoad}
        onError={() => console.log("error")}
      />
    </S.Wrapper>
  );
};

export default Image;
