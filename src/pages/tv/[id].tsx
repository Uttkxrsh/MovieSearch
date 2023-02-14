import { IProps } from "@/types/TvPage.types";
import * as S from "@/style/ResultPage.style";
import urlBuilder from "@/utils/urlBuilder";
import { GoPrimitiveDot } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import { paramCase } from "change-case";
import WatchProviders from "@/components/WatchProviders";
import TmdbLogo from "@/components/Icons/TmdbLogo";
import ResultMeta from "@/components/Meta/ResultMeta";
import { NextPage } from "next";

const Tv: NextPage<IProps> = ({ show }) => {
  return (
    <>
      <ResultMeta
        type="tv"
        title={show.name}
        image={show.backdrop_path}
        id={`${show.id}`}
      />
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
                  <p>{`${show.number_of_seasons} ${
                    show.number_of_seasons > 1 ? "seasons" : "season"
                  }`}</p>
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
                  <TmdbLogo />
                </a>
              </S.Links>
            </S.MoreInfo>
            <WatchProviders providers={show["watch/providers"]} />
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
  const request = await fetch(urlBuilder(`/api/tv`, { id }), {
    cache: "no-store",
  });

  if (request.status === 404) {
    return {
      props: {
        show: {},
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
      show: result,
    },
  };
};

export default Tv;
