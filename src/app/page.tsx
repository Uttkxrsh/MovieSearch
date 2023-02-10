"use client";

import search from "@/lib/search";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import * as S from "./Home.style";
import ISearchResultItem from "@/types/ISearchResultItem";
import SearchResult from "@/components/SearchResult";
import isMovie from "@/utils/isMovieSearchResult";
import { APP_URL } from "@/lib/constants";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<ISearchResultItem[]>([]);

  console.log({ APP_URL });

  useEffect(() => {
    (async () => {
      if (query.trim().length < 3) {
        setSearchResults([]);
        return;
      }

      const results = await search(query);

      if (results) {
        setSearchResults(results);
      }
    })();
  }, [query]);

  const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search/${query}`);
    }
  };

  return (
    <S.Container>
      <div>
        <h1>Where 2 watch</h1>
        <S.FormContainer>
          <S.InputContainer>
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleInputSubmit}
              value={query}
            />
            <div>
              {query.length > 0 && (
                <IoClose
                  size="24px"
                  color="white"
                  onClick={() => setQuery("")}
                />
              )}
              <AiOutlineSearch
                size="26px"
                color="#ffffff"
                onClick={() => router.push(`/search/${query}`)}
              />
            </div>
          </S.InputContainer>
          {searchResults && (
            <S.SearchResults>
              {JSON.parse(JSON.stringify(searchResults))
                .slice(0, 3)
                .map((result: ISearchResultItem) => {
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
              {searchResults.length > 3 && (
                <S.MoreContainer>
                  <Link href={`/search/${query}`}>More results</Link>
                </S.MoreContainer>
              )}
            </S.SearchResults>
          )}
        </S.FormContainer>
      </div>
    </S.Container>
  );
};

export default Home;
