import { IProps } from "./TvPage.types";
import * as S from "./TvPage.style";
import { NextPage } from "next";
import urlBuilder from "@/utils/urlBuilder";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { paramCase } from "change-case";
import tmdbLogo from "@/assets/tmdb_logo.svg";
import ITv from "@/types/ITv";

const getTv = async (id: string): Promise<ITv> => {
  const request = await fetch(urlBuilder(`/api/tv`, { id }));

  if (request.status === 404) {
    throw new Error("404 TV Show not found");
  }

  if (!request.ok) {
    throw new Error("Something went wrong");
  }

  const result = await request.json();

  return result;
};

/* @ts-expect-error Server Component */
const Movie: NextPage<IProps> = async ({ params }) => {
  const { id } = params;
  const show = await getTv(id);

  return (
    <S.Container>
      <S.BackdropContainer isBackdrop={!!show.backdrop_path}>
        {show.backdrop_path && (
          <S.Backdrop
            alt={`Backdrop for ${show.name}`}
            src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
          />
        )}
      </S.BackdropContainer>
      <S.Main>
        <div>
          <S.BackButton href="/">{"< Back"}</S.BackButton>
          <h1>{show.name}</h1>
          <S.MovieMeta>
            <p>{new Date(show.first_air_date).getFullYear()}</p>
            {show.number_of_seasons && (
              <>
                <GoPrimitiveDot size="12px" />
                <p>{show.number_of_seasons} seasons</p>
              </>
            )}
            {show.genres.length > 0 && (
              <>
                <GoPrimitiveDot size="12px" />
                <p>{show.genres.map((genre) => genre.name).join(", ")}</p>
              </>
            )}
          </S.MovieMeta>
          {show.overview && <S.Description>{show.overview}</S.Description>}
          <S.MoreInfo>
            <S.Rating>
              <IoMdStar />
              <p>{show.vote_average.toFixed(1)}</p>
            </S.Rating>
            <S.Separator size="12px" />
            <S.Links>
              <a
                href={`https://www.themoviedb.org/tv/${show.id}-${paramCase(
                  show.name
                )}`}
              >
                <img src={tmdbLogo.src} alt="The Movie DB" />
              </a>
            </S.Links>
          </S.MoreInfo>
          {/* <PlatformSelect movieId={movie.id} /> */}
        </div>
      </S.Main>
    </S.Container>
  );
};

export default Movie;
