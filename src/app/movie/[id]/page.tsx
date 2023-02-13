import { IProps } from "./MoviePage.types";
import * as S from "@/style/ResultPage";
import IMovie from "@/types/IMovie";
import urlBuilder from "@/utils/urlBuilder";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { FaImdb } from "react-icons/fa";
import { paramCase } from "change-case";
import { notFound } from "next/navigation";
import WatchProviders from "@/components/WatchProviders";
import TmdbLogo from "@/components/Icons/TmdbLogo";
import ResultMeta from "@/components/Meta/ResultMeta";

const formatTime = (mins: number): string => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  const paddedM = m < 10 ? "0" + m : m;
  return `${h}h${paddedM}m`;
};

const getMovie = async (id: string): Promise<IMovie> => {
  const request = await fetch(urlBuilder(`/api/movie`, { id }), {
    cache: "no-store",
  });

  if (request.status === 404) {
    notFound();
  }

  if (!request.ok) {
    throw new Error("500 Something went wrong");
  }

  const result = await request.json();

  return result;
};

const Movie = async ({ params }: IProps) => {
  const { id } = params;
  const movie = await getMovie(id);

  return (
    <>
      <ResultMeta
        image={movie.backdrop_path}
        title={movie.title}
        type="movie"
      />
      <S.Container>
        <S.BackdropContainer isBackdrop={!!movie.backdrop_path}>
          {movie.backdrop_path && (
            <S.Backdrop
              alt={`Backdrop for ${movie.title}`}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
          )}
        </S.BackdropContainer>
        <S.Main>
          <div>
            <S.BackButton href="/">{"< Back"}</S.BackButton>
            <h1>{movie.title}</h1>
            <S.MovieMeta>
              <p>{new Date(movie.release_date).getFullYear()}</p>
              {movie.runtime && (
                <>
                  <GoPrimitiveDot size="12px" />
                  <p>{formatTime(movie.runtime)}</p>
                </>
              )}
              {movie.genres.length > 0 && (
                <>
                  <GoPrimitiveDot size="12px" />
                  <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
                </>
              )}
            </S.MovieMeta>
            {movie.overview && <S.Description>{movie.overview}</S.Description>}
            <S.MoreInfo>
              <S.Rating>
                <IoMdStar />
                <p>{movie.vote_average.toFixed(1)}</p>
              </S.Rating>
              <S.Separator size="12px" />
              <S.Links>
                {movie.imdb_id && (
                  <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
                    <FaImdb size="32px" />
                  </a>
                )}
                <a
                  href={`https://www.themoviedb.org/movie/${
                    movie.id
                  }-${paramCase(movie.title)}`}
                >
                  <TmdbLogo />
                </a>
              </S.Links>
            </S.MoreInfo>
            <WatchProviders providers={movie["watch/providers"]} />
          </div>
        </S.Main>
      </S.Container>
    </>
  );
};

export default Movie;
