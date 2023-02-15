import { IProps } from "@/types/MoviePage.types";
import * as S from "@/style/ResultPage.style";
import urlBuilder from "@/utils/urlBuilder";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { FaImdb } from "react-icons/fa";
import { paramCase } from "change-case";
import WatchProviders from "@/components/WatchProviders";
import TmdbLogo from "@/components/Icons/TmdbLogo";
import ResultMeta from "@/components/Meta/ResultMeta";

const formatTime = (mins: number): string => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  const paddedM = m < 10 ? "0" + m : m;
  return `${h}h${paddedM}m`;
};

const Movie = ({ movie }: IProps) => {
  return (
    <>
      <ResultMeta
        type="movie"
        title={movie.title}
        image={movie.backdrop_path}
        id={`${movie.id}`}
        rating={movie.vote_average}
        ratingCount={movie.vote_count}
      />
      <S.Container>
        <S.BackdropContainer isBackdrop={!!movie.backdrop_path}>
          {movie.backdrop_path && (
            <S.Backdrop
              priority
              fill
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
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
                  <a
                    aria-label="Imdb"
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  >
                    <FaImdb size="32px" />
                  </a>
                )}
                <a
                  aria-label="TMDB"
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

export const getServerSideProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const request = await fetch(urlBuilder(`/api/movie`, { id }), {
    cache: "no-store",
  });

  if (request.status === 404) {
    return {
      props: {
        movie: {},
      },
      notFound: true,
    };
  }

  if (!request.ok) {
    throw new Error("Something went wrong");
  }

  const result = await request.json();

  return {
    props: {
      movie: result,
    },
  };
};

export default Movie;
