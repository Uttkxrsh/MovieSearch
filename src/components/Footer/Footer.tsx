import { FC } from "react";
import * as S from "./Footer.style";
import { IProps } from "./Footer.types";

const Footer: FC<IProps> = ({ mobileFixed }) => {
  return (
    <S.Container mobileFixed={mobileFixed}>
      <S.Links>
        <p>
          made by <a href="https://github.com/theo0165">Uttkarsh Singh</a>
        </p>
        <span>|</span>
        <a href="https://github.com/theo0165/where-to-watch">fork on github</a>
      </S.Links>
      <S.Small>
        This product uses the{" "}
        <a href="https://developers.themoviedb.org">TMDB API</a><a href="https://themoviedb.org"></a>.
      </S.Small>
    </S.Container>
  );
};

export default Footer;
