import Movie from "../../types/Movie";
import urlBuilder from "../urlBuilder";

export default async (query: string): Promise<Movie[] | null> => {
  const request = await fetch(
    urlBuilder("/search/movie", {
      query,
    })
  );

  const response = await request.json();

  if (request.ok) {
    return response.results.slice(0, 7);
  }

  return null;
};
