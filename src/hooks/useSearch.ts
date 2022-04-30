import { useEffect, useState } from "react";
import Movie from "../types/Movie";
import urlBuilder from "../utils/urlBuilder";

export default (query: string): Movie[] => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  useEffect(() => {
    (async () => {
      const request = await fetch(urlBuilder("/search/movie", { query }));

      if (request.ok) {
        const { results } = await request.json();

        setSearchResults(results);
      }
    })();
  }, []);

  return searchResults;
};
