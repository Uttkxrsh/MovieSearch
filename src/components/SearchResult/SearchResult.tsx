import { FC } from "react";
import { IProps } from "./SearchResult.types";
import * as S from "./SearchResult.style";
import { IoIosArrowForward } from "react-icons/io";
import missingPoster from "@/assets/missing_poster.png";

const SearchResult: FC<IProps> = ({ id, posterPath, title, isMovie }) => {
  return (
    <S.WrapperLink href={`/${isMovie ? "movie" : "tv"}/${id}`} key={id}>
      <div>
        <S.ImageWrapper>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={`Poster for ${title}`}
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w92/${posterPath}`
                : missingPoster.src
            }
          />
        </S.ImageWrapper>
        <p>{title}</p>
      </div>
      <IoIosArrowForward size="24px" color="white" />
    </S.WrapperLink>
  );
};

export default SearchResult;
