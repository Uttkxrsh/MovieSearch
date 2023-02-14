import { IProps } from "@/types/SearchPage.types";
import * as S from "@/style/SearchPage.style";
import urlBuilder from "@/utils/urlBuilder";
import ISearchResultItem from "@/types/ISearchResultItem";
import SearchResult from "@/components/SearchResult";
import isMovie from "@/utils/isMovieSearchResult";
import PageMeta from "@/components/Meta/PageMeta";
import { APP_TITLE } from "@/lib/constants";

// TODO: Search not working
const SearchPage = ({ result, query }: IProps) => {
  return (
    <>
      <PageMeta title={`Search results for "${query}" - ${APP_TITLE}`} />
      <S.Container>
        <div>
          <S.Back href="/">{"< Back"}</S.Back>
          <h1>
            Found {result ? result.length : 0} movies for: {query}
          </h1>
          <S.Results>
            {(result ?? []).map((result) => {
              if (isMovie(result)) {
                return (
                  <SearchResult
                    isMovie
                    key={result.id}
                    id={result.id}
                    posterPath={result.poster_path}
                    title={result.title}
                  />
                );
              }

              return (
                <SearchResult
                  isTv
                  key={result.id}
                  id={result.id}
                  posterPath={result.poster_path}
                  title={result.name}
                />
              );
            })}
          </S.Results>
        </div>
      </S.Container>
    </>
  );
};

export const getServerSideProps = async ({
  params,
}: {
  params: { query: string };
}) => {
  const { query } = params;

  const request = await fetch(urlBuilder("/api/search", { q: query }), {
    cache: "no-store",
  });

  if (!request.ok) {
    return {
      props: {
        result: [],
        query,
      },
    };
  }

  const result = await request.json();

  return {
    props: {
      result,
      query,
    },
  };
};

export default SearchPage;
