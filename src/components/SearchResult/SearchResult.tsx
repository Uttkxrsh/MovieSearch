import { FC } from "react";
import { IProps } from "./SearchResult.types";
import * as S from "./SearchResult.style";
import { IoIosArrowForward } from "react-icons/io";
import missingPoster from "@/assets/missing_poster.png";
import Image from "@/components/Image";

const SearchResult: FC<IProps> = ({ id, posterPath, title, isMovie }) => {
  return (
    <S.WrapperLink href={`/${isMovie ? "movie" : "tv"}/${id}`} key={id}>
      <div>
        <S.ImageWrapper>
          <Image
            alt={posterPath ? `Poster for ${title}` : "Missing poster"}
            src={
              posterPath
                ? `https://image.tmdb.org/t/p/w92/${posterPath}`
                : missingPoster.src
            }
            w="100%"
            h="100%"
          />
        </S.ImageWrapper>
        <div>
          <p>{title}</p>
          <S.MediaType>{isMovie ? "Movie" : "TV Show"}</S.MediaType>
        </div>
      </div>
      <IoIosArrowForward size="24px" color="white" />
    </S.WrapperLink>
  );
};

export default SearchResult;
