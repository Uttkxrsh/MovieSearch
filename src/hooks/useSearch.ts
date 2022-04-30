import { useEffect, useState } from "react";
import Movie from "../types/Movie";
import SearchResults from "../types/SearchResult";
import urlBuilder from "../utils/urlBuilder";

const useSearch = (query: string): Movie[] => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(urlBuilder("/search/movie", { query }));

      if (request.ok) {
        const { results }: SearchResults = await request.json();

        setSearchResults(results);
      }
    })();
  }, []);

  return searchResults;
};

export default useSearch;
