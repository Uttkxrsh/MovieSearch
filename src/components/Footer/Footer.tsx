import { FC } from "react";
import * as S from "./Footer.style";

const Footer: FC = () => {
  return (
    <S.Container>
      <S.Links>
        <p>
          made by <a href="https://github.com/theo0165">Theo Sandell</a>
        </p>
        <span>|</span>
        <a href="https://github.com/theo0165/where-to-watch">fork on github</a>
      </S.Links>
      <S.Small>
        This product uses the{" "}
        <a href="https://developers.themoviedb.org">TMDB API</a> but is not
        endorsed or certified by <a href="https://themoviedb.org">TMDB</a>.
      </S.Small>
    </S.Container>
  );
};

export default Footer;
