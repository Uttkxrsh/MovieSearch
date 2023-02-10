import { IProps } from "./SearchPage.types";
import * as S from "./SearchPage.style";
import urlBuilder from "@/utils/urlBuilder";
import ISearchResultItem from "@/types/ISearchResultItem";
import SearchResult from "@/components/SearchResult";
import isMovie from "@/utils/isMovieSearchResult";
import { useContext } from "react";
import CountryContext from "@/context/CountryContext";

const getSearchResults = async (
  query: string
): Promise<ISearchResultItem[]> => {
  const request = await fetch(urlBuilder("/api/search", { q: query }));

  if (!request.ok) {
    return [];
  }

  const result = await request.json();
  return result.results;
};

const SearchPage = async ({ params }: IProps) => {
  const results = await getSearchResults(params.query);

  return (
    <S.Container>
      <div>
        <S.Back href="/">{"< Back"}</S.Back>
        <h1>
          Found {results.length} movies for: {params.query}
        </h1>
        <S.Results>
          {results.map((result) => {
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
  );
};

export default SearchPage;
