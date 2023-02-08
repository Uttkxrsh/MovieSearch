"use client";

import search from "@/lib/search";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import * as S from "./Home.style";

const Home = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any[]>();

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
        <h1>Search for a movie</h1>
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
              {/* {searchResults.map((movie: MovieType) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  poster_path={movie.poster_path}
                />
              ))} */}
              {searchResults.length > 0 && (
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
